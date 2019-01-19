workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for npm-1"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  args = "install"
}

action "GitHub Action for npm-1" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  needs = ["GitHub Action for npm"]
  runs = "snapshot"
  secrets = ["PERCY_TOKEN"]
}
