# Stage 1

## Problem
Display Top 10 Priority Notifications.

## Priority Rules

Placement = 3
Result = 2
Event = 1

## Approach

1. Fetch notifications from API.
2. Assign weight based on notification type.
3. Sort by:
   - Priority (Highest First)
   - Timestamp (Latest First)
4. Return Top 10 notifications.

## Data Structure Used

List<Notification>

## Algorithm

OrderByDescending(Priority)
ThenByDescending(Timestamp)
Take(10)

## Time Complexity

O(n log n)

## Space Complexity

O(n)