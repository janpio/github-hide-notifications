# github-hide-notifications

A browser extensions that lets you hide or collapse some of your notifications

## Use Case

I subscribe to notifications of many orgs and repos with my GitHub account. The work portion of those I don't want to really see in evenings, weekends or during vacation, vice versa some of the OSS and personal projects I don't want to see by default during a work day.

## Functionality

The options of this extension contain 2 textareas that accept strings for GitHub organisations or repositories (one per line). When visiting github.com/notifications the extension compares the entries of the first list with the headlines of the notification tables, and hides them if a match is found. The entries from the second table then allow you to unhide some of these tables again (which e.g. lets you hide a complete org, then just show some specific repositories of it).

(As I already hide the notification unread marker (blue dot) with my adblocker, this only relates to the issue and pull request notifications on https://github.com/notifications)

## Installation

Simply install the extension from your browser's add-on store:

- https://addons.mozilla.org/en-US/firefox/addon/github-hide-notifications/
- https://chrome.google.com/webstore/detail/github-hide-notifications/dnjclaacpfcokogoillehefgnkeefojj

## Contributing

Pull requests are welcome as well as issues reporting problems or providing feedback.

The extension is extremely simple and as such doesn't include a package manager and/or build tool. To develop the extension simply clone the repository and load the unpacked extensions directly into Google Chrome or Firefox.

:octocat: :two_hearts:
