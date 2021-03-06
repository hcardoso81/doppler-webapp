#!/bin/sh

pkgName="doppler-webapp"
pkgVersion=${1:-"v0.0.0-build0"}
cdnBaseUrl=${2:-"//cdn.fromdoppler.com/$pkgName"}
pkgBuild=${4:-0}
pkgCommitId=${5:-$(git rev-parse HEAD)}
environments="int qa development production demo"

# Exit immediately if a command exits with a non-zero status.
set -e

# Stop script if unbound variable found (use ${var:-} if intentional)
set -u

# Lines added to get the script running in the script path shell context
# reference: http://www.ostricher.com/2014/10/the-right-way-to-get-the-directory-of-a-bash-script/
cd $(dirname $0)

# To avoid issues with MINGW y Git Bash, see:
# https://github.com/docker/toolbox/issues/673
# https://gist.github.com/borekb/cb1536a3685ca6fc0ad9a028e6a959e3
export MSYS_NO_PATHCONV=1
export MSYS2_ARG_CONV_EXCL="*"

echo Publishing to Docker
echo pkgName: $pkgName
echo cdnBaseUrl: $cdnBaseUrl
echo pkgVersion: $pkgVersion
echo pkgBuild: $pkgBuild
echo pkgCommitId: $pkgCommitId


for environment in ${environments}; do
    echo Publishing ${environment}...

    if test "$environment" = "production";
    then
        env_version=$pkgVersion;
    else
        env_version=$environment-$pkgVersion;
    fi

    echo deploying into $env_version folder ...

    docker build --pull \
        --build-arg environment=$environment \
        --build-arg env_version=$env_version \
        --build-arg CDN_SFTP_PORT=$CDN_SFTP_PORT \
        --build-arg CDN_SFTP_USERNAME=$CDN_SFTP_USERNAME \
        --build-arg CDN_SFTP_HOSTNAME=$CDN_SFTP_HOSTNAME \
        --build-arg CDN_SFTP_BASE=$CDN_SFTP_BASE \
        --build-arg SSH_PRIVATE_KEY="$(cat ~/.ssh/id_rsa)" \
        --build-arg SSH_KNOWN_HOSTS="$(cat ~/.ssh/known_hosts)" \
        -f Dockerfile.BUILDS_AND_CDN \
        .

done
