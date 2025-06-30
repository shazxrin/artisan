module.exports = {
    repositories: [
        "shazxrin/cluster",
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
    automerge: true,
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
        },
        {
            matchManagers: [
                "argocd"
            ],
            enabled: true
        },
        {
            matchManagers: [
                "kubernetes"
            ],
            enabled: true
        }
    ],
    hostRules: [
        {
            matchHost: "api.github.com",
            hostType: "github",
            token: process.env.RENOVATE_GPR_TOKEN
        },
        {
            matchHost: "maven.pkg.github.com",
            hostType: "maven",
            token: process.env.RENOVATE_GPR_TOKEN
        },
        {
            matchHost: "ghcr.io",
            hostType: "docker",
            username: "shazxrin",
            password: process.env.RENOVATE_GPR_TOKEN
        },
        {
            matchHost: "ghcr.io",
            hostType: "helm",
            username: "shazxrin",
            password: process.env.RENOVATE_GPR_TOKEN
        }
    ],
    ignoreDeps: []
}