# Unary Operators
* Unary operators in Java are operators that operate on a single operand. They perform various operations such as incrementing/decrementing a value, negating an expression, or inverting the value of a boolean. Here's a list of unary operators in Java along with their descriptions:
1. **Unary Plus (`+`)**: This operator indicates a positive value. Although it doesn't change the value, it can be used to emphasize that a number is positive.
    
    `int a = +5; // Positive 5`
    
2. **Unary Minus (`-`)**: This operator negates an expression, effectively changing its sign.
    
    `int a = 5; int b = -a; // b is -5`
    
3. **Increment (`++`)**: This operator increases a variable's value by 1. It can be used in two forms:
    
    - **Pre-increment (`++variable`)**: The value is incremented before it is used in an expression.
        
        `int a = 5; int b = ++a; // a is incremented to 6, then b is assigned 6`
        
    - **Post-increment (`variable++`)**: The value is used in an expression, then incremented.
        `int a = 5; int b = a++; // b is assigned 5, then a is incremented to 6`
        
4. **Decrement (`--`)**: This operator decreases a variable's value by 1. It can also be used in two forms:
    
    - **Pre-decrement (`--variable`)**: The value is decremented before it is used in an expression.
        `int a = 5; int b = --a; // a is decremented to 4, then b is assigned 4`
        
    - **Post-decrement (`variable--`)**: The value is used in an expression, then decremented.
        `int a = 5; int b = a--; // b is assigned 5, then a i`

##### Assignment Operators
Assignment operators in Java are used to assign values to variables. They are a combination of an operator and the assignment operator (`=`), which allows for more concise and readable code. Here are the various assignment operators in Java:
### Basic Assignment Operator
- **`=`**: This is the simplest assignment operator. It assigns the value on the right to the variable on the left.
  ```java
  int a = 10; // Assigns 10 to a
  ```

### Compound Assignment Operators
These operators perform an operation and assign the result to the variable in one step.

- **`+=`**: Addition assignment operator. It adds the right operand to the left operand and assigns the result to the left operand.
  ```java
  int a = 5;
  a += 3; // a is now 8 (equivalent to a = a + 3)
  ```

- **`-=`**: Subtraction assignment operator. It subtracts the right operand from the left operand and assigns the result to the left operand.
  ```java
  int a = 5;
  a -= 3; // a is now 2 (equivalent to a = a - 3)
  ```

- **`*=`**: Multiplication assignment operator. It multiplies the left operand by the right operand and assigns the result to the left operand.
  ```java
  int a = 5;
  a *= 3; // a is now 15 (equivalent to a = a * 3)
  ```

- **`/=`**: Division assignment operator. It divides the left operand by the right operand and assigns the result to the left operand.
  ```java
  int a = 9;
  a /= 3; // a is now 3 (equivalent to a = a / 3)
  ```

- **`%=`**: Modulus assignment operator. It takes the modulus using the left operand by the right operand and assigns the result to the left operand.
  ```java
  int a = 10;
  a %= 3; // a is now 1 (equivalent to a = a % 3)
  ```

### Bitwise Compound Assignment Operators
These operators perform a bitwise operation and assign the result to the variable in one step.

- **`&=`**: Bitwise AND assignment operator. It performs a bitwise AND on the left operand and the right operand and assigns the result to the left operand.
  ```java
  int a = 5;   // 0101 in binary
  a &= 3;      // 0011 in binary, a is now 1 (equivalent to a = a & 3)
  ```

- **`|=`**: Bitwise OR assignment operator. It performs a bitwise OR on the left operand and the right operand and assigns the result to the left operand.
  ```java
  int a = 5;   // 0101 in binary
  a |= 3;      // 0011 in binary, a is now 7 (equivalent to a = a | 3)
  ```

- **`^=`**: Bitwise XOR assignment operator. It performs a bitwise XOR on the left operand and the right operand and assigns the result to the left operand.
  ```java
  int a = 5;   // 0101 in binary
  a ^= 3;      // 0011 in binary, a is now 6 (equivalent to a = a ^ 3)
  ```

- **`<<=`**: Left shift assignment operator. It shifts the bits of the left operand to the left by the number of positions specified by the right operand and assigns the result to the left operand.
  ```java
  int a = 5;   // 0101 in binary
  a <<= 1;     // 1010 in binary, a is now 10 (equivalent to a = a << 1)
  ```

- **`>>=`**: Right shift assignment operator. It shifts the bits of the left operand to the right by the number of positions specified by the right operand and assigns the result to the left operand.
  ```java
  int a = 5;   // 0101 in binary
  a >>= 1;     // 0010 in binary, a is now 2 (equivalent to a = a >> 1)
  ```

- **`>>>=`**: Unsigned right shift assignment operator. It shifts the bits of the left operand to the right by the number of positions specified by the right operand, filling the leftmost bits with zeros, and assigns the result to the left operand.
  ```java
  int a = -10; // 11111111111111111111111111110110 in binary (32-bit signed integer)
  a >>>= 2;    // 00111111111111111111111111111101 in binary, a is now 1073741821 (equivalent to a = a >>> 2)
  ```

These assignment operators help make the code more concise and can improve readability by reducing the amount of repetitive code.


### Relational Operators

1. **Equal to (`==`)**: Checks if the values of two operands are equal.
    
    `int a = 5; int b = 5; boolean result = (a == b); // result is true`
    
2. **Not equal to (`!=`)**: Checks if the values of two operands are not equal.
    
    `int a = 5; int b = 3; boolean result = (a != b); // result is true`
    
3. **Greater than (`>`)**: Checks if the value of the left operand is greater than the value of the right operand.
    
    `int a = 5; int b = 3; boolean result = (a > b); // result is true`
    
4. **Less than (`<`)**: Checks if the value of the left operand is less than the value of the right operand.
    
    `int a = 5; int b = 3; boolean result = (a < b); // result is false`
    
5. **Greater than or equal to (`>=`)**: Checks if the value of the left operand is greater than or equal to the value of the right operand.
    `int a = 5; int b = 5; boolean result = (a >= b); // result is true`
    
6. **Less than or equal to (`<=`)**: Checks if the value of the left operand is less than or equal to the value of the right operand.
    `int a = 5; int b = 8; boolean result = (a <= b); // result is true`

##### Logical Operators 
Logical operators in Java are used to perform logical operations on boolean expressions. They return a boolean result (`true` or `false`) based on the logical operation performed. Here are the logical operators in Java along with their descriptions.
### Logical Operators

1. **Logical AND (`&&`)**: This operator returns `true` if both operands are `true`.
    
    `b
    oolean a = true; boolean b = false; boolean result = (a && b); // result is false`
    
2. **Logical OR (`||`)**: This operator returns `true` if at least one of the operands is `true`.

    `boolean a = true; boolean b = false; boolean result = (a || b); // result is true`
    
3. **Logical NOT (`!`)**: This operator returns the opposite value of the operand.
    `boolean a = true; boolean result = !a; // result is false`

#### Ternary Opertor for if condition
* The ternary operator in Java is a shorthand for `if-else` statements, providing a concise way to express conditional logic. It is also known as the conditional operator. The ternary operator uses the `?` and `:` symbols and has the following syntax:

```java
result = condition ? value_if_true : value_if_false;
```

Here's a breakdown of how it works:
- `condition` is a boolean expression that evaluates to either `true` or `false`.
- If `condition` is `true`, `value_if_true` is assigned to `result`.
- If `condition` is `false`, `value_if_false` is assigned to `result`.

 Example Usage
Here's a simple example that demonstrates the ternary operator:

```java
public class TernaryOperatorExample {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;

        // Using the ternary operator
        int max = (a > b) ? a : b;

        System.out.println("The maximum value is: " + max);
    }
}
```

In this example:
- The condition `(a > b)` is evaluated.
- If `a` is greater than `b`, the value of `a` is assigned to `max`.
- Otherwise, the value of `b` is assigned to `max`.

 More Examples

1. **Simple comparison**:
   ```java
   int age = 18;
   String eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
   System.out.println(eligibility); // Outputs "Eligible to vote"
   ```

2. **Nested ternary operator**:
   ```java
   int score = 85;
   String grade = (score >= 90) ? "A" :
                  (score >= 80) ? "B" :
                  (score >= 70) ? "C" :
                  (score >= 60) ? "D" : "F";
   System.out.println("Grade: " + grade); // Outputs "Grade: B"
   ```

3. **Using ternary operator with method calls**:
   ```java
   public class TernaryOperatorWithMethods {
       public static void main(String[] args) {
           int num = 5;
           String result = (num % 2 == 0) ? "Even" : "Odd";
           System.out.println("The number is: " + result); // Outputs "The number is: Odd"
       }
   }
   ```

Points to Remember
- The ternary operator can improve the readability of simple conditional assignments but can make the code harder to read if overused or nested excessively.
- It is best used for simple conditional expressions. For more complex logic, traditional `if-else` statements may be more readable and maintainable.

Common Use Cases
1. **Simplifying conditional assignments**:
   ```java
   int x = 10;
   int y = 20;
   int min = (x < y) ? x : y; // Assigns the smaller value to min
   ```

2. **Assigning default values**:
   ```java
   String input = null;
   String output = (input != null) ? input : "default";
   System.out.println(output); // Outputs "default"
   ```

3. **Inline conditional logic**:
   ```java
   boolean isMember = true;
   double price = (isMember) ? 9.99 : 19.99;
   System.out.println("Price: $" + price); // Outputs "Price: $9.99"
   ```

The ternary operator is a powerful tool for writing concise and expressive code when used appropriately.

### Bitwise operators
These operators perform bitwise operations on integer types.

1. **Bitwise AND (`&`)**: Performs a bitwise AND operation. ( Both the bits has to be 1 if not it will return 0).
    
    `int a = 5;   // 0101 in binary int b = 3;   // 0011 in binary int result = a & b; // result is 1 (0001 in binary)`
    
2. **Bitwise OR (`|`)**: Performs a bitwise OR operation. (If any of the bit is 1 it returns 1)
    
    `result = a | b; // result is 7 (0111 in binary)`
    
3. **Bitwise XOR (`^`)**: Performs a bitwise XOR operation. (Corresponding values or different then it returns 1 )
    `result = a ^ b; // result is 6 (0110 in binary)`