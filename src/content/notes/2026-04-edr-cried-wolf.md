---
title: When the EDR cried wolf
date: 2026-04-12
tags: [detection]
summary: Tuning a noisy alert by going back to first principles — what does this rule actually mean, and to whom?
---

> Placeholder entry — replace with your real write-up.

The alert fired 312 times in a week. Of those, 311 were a single backup agent doing exactly
what backup agents do. The 312th was the same agent on a different host, doing the same
thing, just enough off-pattern to look interesting.

The instinct is to suppress. The better move was to ask: what is this rule actually
trying to catch, and who reads it at 3am?

## What changed

- Reworded the rule so the detection name described the *behavior we care about*, not the
  artifact we were keying on.
- Added context fields the on-call would actually look at first.
- Wrote a runbook entry pointing back here.

## What I'd do differently

Start from the on-call's screen, not the data source.
