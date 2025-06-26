module.exports = {
    repositories: [
        "shazxrin/notifier",
        "shazxrin/one-percent-better"
    ],
    extends: [
        "config:recommended"
    ],
    platform: "github",
    labels: [
        "dependencies"
    ],
    automerge: false,
    packageRules: [
        {
            matchManagers: [
                "gradle"
            ],
            matchDepTypes: [
                "dependencies",
                "pluginDependencies",
                "dependencyManagement",
                "plugins"
            ],
            enabled: true,
        },
        {
            matchManagers: [
                "github-actions"
            ],
            enabled: true
        }
    ],
    hostRules: [
        {
            matchHost: "maven.pkg.github.com",
            hostType: "maven",
            token: process.env.RENOVATE_GPR_TOKEN
        },
        {
            matchHost: "ghcr.io",
            hostType: "docker",
            username: "shazxrin",
            password: process.env.RENOVATE_GHCR_TOKEN
        },
        {
            matchHost: "ghcr.io",
            hostType: "helm",
            username: "shazxrin",
            password: process.env.RENOVATE_GHCR_TOKEN
        }
    ],
    ignoreDeps: []
}