# Doodle parser #

Parses Doodle polls and returns the results.

**Before you use this project, read [the notes](#notes)!**



# How poll data is fetched? #
Doodle does not expose any API, at least there is none at the time of creating this project.
Therefore I had to resort to fetching the poll page and extracting the results straight from
the code there.


# Notes #

* This project is currently under development.
* Do not use this project in production. Doodle does not expose any API as of now, so I rely solely
  on [how Doodle currently provides the data for their web app](#how-poll-data-is-fetched). It may
  change in the future, so this method is highly unreliable.


# Author #
The author of this project is Grzegorz Rozdzialik.
