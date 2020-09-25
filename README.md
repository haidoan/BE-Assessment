# BE-Assessment
Task 1

- how to run
 `node sockets DISTANCE_VALUE`
while `DISTANCE_VALUE` is a positive number in kilo meter
example :
 `node sockets 384400`

Explanation
```
as my understanding from the document, 
    time            : 1 2 3 4 (seconds)
    total travelled : 1 2 4 7 (meters) -> how far the rocket goes after x second
so total travelled distance at Xth seconds = fib(1) + fib(2) + ....+ fib(x)
as my comment from code.
    the distance travelled in each second that the rocket travel is fibonacci value in that second index
    time(seconds)   0 1 2 3 4 5  6  7   (seconds)
    fib index       0 1 1 2 3 5  8  13  (this is distance rocket travelled in xth second, not total distance travelled)
    total travelled 0 1 2 4 7 12 20 33  (meter)
    so total distance in Xth second = fib(x) + (total travelled distance in (x-1)th second)
```

from my debug log
```
3th second, total travelled distance = 4 meters
4th second, total travelled distance = 7 meters
5th second, total travelled distance = 12 meters
6th second, total travelled distance = 20 meters
7th second, total travelled distance = 33 meters
8th second, total travelled distance = 54 meters
9th second, total travelled distance = 88 meters
10th second, total travelled distance = 143 meters
```

Task 2
- how to run `node totals`
- assumption : I assume that `products` value only take into account if that item's category has no sub-category. (its is the deepest category)

Required : this does not require npm package install.