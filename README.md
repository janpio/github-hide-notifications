# github-hide-notifications

A browser extensions that lets you hide or collapse some of your notifications

## Use Case

I subscribe to notifications of many orgs and repos with my GitHub account. The work portion of those I don't want to really see in evenings, weekends or during vacation, vice versa some of the OSS and personal projects I don't want to see by default during a work day.

(As I already hide the notification unread marker (blue dot) with my adblocker, this only relates to the issue and pull request notifications on https://github.com/notifications)

## Plan

The extension options contains 2 textareas that accept strings for GitHub organisations or repositories (plain strings or regex TBD). One is for _hiding_ the notifications completely, the other for collapsing the notifications. When visiting https://github.com/notifications the extension compares the both lists of strings to the `h3`s of the `div.boxed-group`s inside `div.notifications-list`. For entries in the _hide_ list, the whole `boxed-group` gets `display:none` so it is just hidden, for the `collapse` only the `<ul>` contained within gets `display:none` and the `boxed-group-action` gets an additional entry to show the `<ul>` again (uncollapse).

## TODO

Everything.
