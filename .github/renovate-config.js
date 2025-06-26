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
            matchHost: "https://maven.pkg.github.com/shazxrin",
            hostType: "maven",
            token: process.env.RENOVATE_TOKEN
        }
    ],
    ignoreDeps: []
}