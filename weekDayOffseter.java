// you can also use imports, for example:
// import java.util.*;
import java.util.Arrays;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public static String[] days = { "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" };

    public String solution(String S, int K) {
        // write your code in Java SE 8

        int offset = K % 7;

        System.out.println(getDayIndex(S));

        return Integer.toString(offset);
    }

    public static int getDayIndex(String day) {
        // find length of array 
        int len = Solution.days.length;
        System.out.println(Solution.days.length);
        System.out.println(day);
        int i = 0;

        while (i < len) {
            System.out.println(Solution.days[i] + day);
            if (Solution.days[i] == day) {
                return i;
            } else {
                i = i + 1;
            }
        }
        return -1;
    }
}