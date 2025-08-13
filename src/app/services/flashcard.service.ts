import { Injectable } from '@angular/core';
import { Flashcard } from '../models/flashcard.model';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private flashcards: Flashcard[] = [
    {
      id: 1,
      question: "What is a class?",
      answer: `A class is a template to create an object. It contains properties as well as methods. We can create many instances of objects from a single class.

<pre><code>public class Student    	{
    //data members
    public int rollNumber { get; set; }
    public string fullName { get; set; }
    //function
    public void PrintDetails()
    {
        //login of function
    }
}</code></pre>`,
      category: 'Beginner',
      tags: ['class', 'object', 'template']
    },
    {
      id: 2,
      question: "What are the main concepts of object-oriented programming?",
      answer: "Encapsulation, abstraction, polymorphism, and inheritance are the main concepts of object-oriented programming. Object-oriented programming differs from procedural programming insofar as procedural programming happens chronologically, step-by-step, whereas object-oriented programming is far more flexible.",
      category: 'Beginner',
      tags: ['oop', 'encapsulation', 'abstraction', 'polymorphism', 'inheritance']
    },
    {
      id: 3,
      question: "What is an object?",
      answer: `An object is an instance of a class through which we access the functions of that class. We can use the "new" keyword to create an object. A class that creates an object in memory holds information about the functions, data members, and behavior of that class.

<pre><code>public class Employee
{
    private string fName { get; set; }
    private string lName { get; set; }
    
    public void Display()
    {
        Console.WriteLine("Full name is {0} {1}", fName, lName);
    }
    
    public void SetName(string firstName, string lastName)
    {
        fName = firstName;
        lName = lastName;
    }
}

class Program
{
    static void Main(string[] args)
    {
        //this is object
        Employee employee = new Employee();
        employee.SetName("Fred", "Cabello");
        employee.Display();
    }
}</code></pre>`,
      category: 'Beginner',
      tags: ['object', 'instance', 'class', 'new']
    },
    {
      id: 4,
      question: "What is a constructor, and what are its different types?",
      answer: `A constructor is like a method with the same name as the class, but it is a unique method. Even if it is not created, the compiler creates a default constructor in memory at the time of creating an object of the class.

The constructor is used to initialize the object with some default values.

Types: Default constructor, parameterized constructor, copy constructor, static constructor, and private constructor.

<pre><code>public class Student
{
    private int rollNumber { get; set; }
    private string fullName { get; set; }

    //default constructor
    public Student() { }
    
    //parameterized constructor
    public Student(int rNum, string fName)
    {
        this.rollNumber = rNum;
        this.fullName = fName;
    }
    
    //static constructor
    static Student() { }
    
    //copy constructor
    public Student(Student student)
    {
        rollNumber = student.rollNumber;
        fullName = student.fullName;
    }
}</code></pre>`,
      category: 'Beginner',
      tags: ['constructor', 'initialization', 'default', 'parameterized']
    },
    {
      id: 5,
      question: "What is a destructor in C#?",
      answer: `A destructor clears out the memory to free up resources and is managed automatically by the garbage collector. System.GC.collect() is called internally for this purpose. However, if required, it can be done explicitly using a destructor.

<pre><code>public class Purchase
{
    //Syntax to write a destructor.
    ~Purchase()
    {
        //code here to release resources.
    }
}</code></pre>`,
      category: 'Beginner',
      tags: ['destructor', 'garbage collection', 'memory management']
    },
    {
      id: 6,
      question: "Is C# code managed or unmanaged code?",
      answer: "C# is managed code because Common Language Runtime compiles the code to intermediate language code. C++ would provide examples of unmanaged code. Managed code simply refers to code that has its execution managed by the runtime.",
      category: 'Beginner',
      tags: ['managed code', 'CLR', 'runtime']
    },
    {
      id: 7,
      question: "What are value types and reference types?",
      answer: `We can categorize variables into value type and reference type. Variables of value type contain the value directly while a reference type variable contains the reference of the memory address where the value is stored actually in the memory.

Value types: Bool, byte, int, char, and decimal
Reference types: String, class, delegates`,
      category: 'Beginner',
      tags: ['value types', 'reference types', 'memory', 'variables']
    },
    {
      id: 8,
      question: "What is a namespace and is it compulsory?",
      answer: `A namespace is a way of organizing classes of the same group or functionality under the same name. We can call it a module. Although it is not compulsory to put class in a namespace.

<pre><code>namespace demoapp
{
    class SomeClass
    {
        public static void someMethod()
        {
            Console.WriteLine("Creating my namespace");
        }
    }
}</code></pre>`,
      category: 'Beginner',
      tags: ['namespace', 'organization', 'module']
    },
    {
      id: 9,
      question: "Explain types of comments in C# with examples.",
      answer: `There are three types of comments in C#:

• Single line comments: <code>//Hey, this is a single line comment</code>
• Multiline comments: <code>/*This is a multiline comment written in two lines*/</code>
• XML comments: 
<pre><code>/// &lt;summary&gt;
/// Here you can write anything
/// &lt;/summary&gt;</code></pre>`,
      category: 'Beginner',
      tags: ['comments', 'documentation', 'xml']
    },
    {
      id: 10,
      question: "Please explain encapsulation.",
      answer: `Encapsulation is a process of wrapping function and data members together in a class; it's like a capsule, a single unit. Encapsulation prevents an unauthorized or unwanted change of data from outside of the function.

<pre><code>class User
{
    private string address;
    private string name;
    public string Address {get {return address; } set {address = value; }}
    public string Name{get {return name; } set {name = value; }}
}

class MyProgram
{
    static void Main(string[] args)
    {
        User u = new User();
        u.Name = "Ravi";
        u.Address = "New Delhi";
        Console.WriteLine("Name: " + u.Name);
        Console.WriteLine("Location: " + u.Address);
    }
}</code></pre>`,
      category: 'Intermediate',
      tags: ['encapsulation', 'data hiding', 'properties']
    },
    {
      id: 11,
      question: "What is abstraction?",
      answer: `Abstraction is the method of exposing only the required features of the class and hiding unnecessary information.

Example: A rider knows the color, name, and model of the bike. Still, they do not know the internal engine and exhaust functionality. Abstraction focuses on providing access for a specific functionality without exposing how that functionality works internally.`,
      category: 'Intermediate',
      tags: ['abstraction', 'hiding', 'interface']
    },
    {
      id: 12,
      question: "What is polymorphism?",
      answer: `Polymorphism means the same method but different implementation. There are two types:

1. Compile-time polymorphism (method overloading):
<pre><code>public class cellphone
{
    public void Typing()
    {
        Console.WriteLine("Using keypad");
    }
    public void Typing(bool isSmartPhone)
    {
        Console.WriteLine("Using qwerty keyboard");
    }
}</code></pre>

2. Run time polymorphism (method overriding):
<pre><code>public class CellPhone
{
    public virtual void Typing()
    {
        Console.WriteLine("Using keypad");
    }
}

public class SmartPhone : CellPhone
{
    public override void Typing()
    {
        Console.WriteLine("Typing function from child class");
    }
}</code></pre>`,
      category: 'Intermediate',
      tags: ['polymorphism', 'overloading', 'overriding']
    },
    {
      id: 13,
      question: "Define an interface and show an example.",
      answer: `An interface is another form of an abstract class that has only abstract public methods. These methods only have the declaration and not the definition.

<pre><code>interface IPencil
{
    void Write(string text);
    void Sharpen(string text);
}

class Pencil : IPencil
{
    public void Write(string text)
    {
        //some code here
    }
    public void Sharpen(string text)
    {
        //some code here
    }
}</code></pre>`,
      category: 'Intermediate',
      tags: ['interface', 'contract', 'implementation']
    },
    {
      id: 14,
      question: "What is inheritance?",
      answer: `A class can inherit data members and methods from another class, which is known as its parent class. The class that inherits properties and methods will be called a child class, derived class, or subclass.

<pre><code>class Mobile  // base class (parent) 
{
    public void call()
    {
        Console.WriteLine("calling...!");
    }
}

class Nokia : Mobile  // derived class (child)
{
    public string modelName = "Nokia";
}

class MyProgram
{
    static void Main(string[] args)
    {
        Nokia myNokia = new Nokia();
        myNokia.call(); // Calls method from Mobile class
    }
}</code></pre>`,
      category: 'Intermediate',
      tags: ['inheritance', 'base class', 'derived class']
    },
    {
      id: 15,
      question: "How would you implement multiple interfaces with the same method name in the same class?",
      answer: `To implement multiple interfaces with the same method name, you would explicitly provide the name of the interface to the body of the method.

<pre><code>interface myInterface1
{
    void Print();
}

interface myInterface2
{
    void Print();
}

class Student : myInterface1, myInterface2
{
    void myInterface1.Print()
    {
        Console.WriteLine("For myInterface1 !!");
    }
    void myInterface2.Print()
    {
        Console.WriteLine("For myInterface2 !!");
    }
}</code></pre>`,
      category: 'Intermediate',
      tags: ['interfaces', 'explicit implementation', 'multiple interfaces']
    },
    {
      id: 16,
      question: "What is the virtual method and how is it different from the abstract method?",
      answer: `A virtual method must have a default implementation, and we can override this virtual method using the override keyword in the derived class.

The abstract method is without implementation and is created inside the abstract class only.

Virtual method example:
<pre><code>public class CellPhone
{
    public virtual void Typing()
    {
        Console.WriteLine("Using old keypad");
    }
}

public class SmartPhone : CellPhone
{
    public override void Typing()
    {
        Console.WriteLine("Using qwerty keyboard");
    }
}</code></pre>

Abstract method example:
<pre><code>public abstract class CellPhones
{
    public abstract void Typing(); //no implementation
}

public class SmartPhones : CellPhones
{
    public override void Typing()
    {
        Console.WriteLine("Using Qwerty keyboard");
    }
}</code></pre>`,
      category: 'Intermediate',
      tags: ['virtual', 'abstract', 'override', 'implementation']
    },
    {
      id: 17,
      question: "What is method overloading and method overriding?",
      answer: `Both method overloading and overriding are a type of polymorphism.

• Method overloading is when we have a function with the same name but a different signature.
• Method overriding is when we override the virtual method of a base class in the child class using the override keyword.`,
      category: 'Intermediate',
      tags: ['overloading', 'overriding', 'polymorphism']
    },
    {
      id: 18,
      question: "What is the static keyword?",
      answer: `We use the static keyword to create a static class, a static method, or static properties. When we create a static class there can be only static data members and static methods in that class.

Static means that we cannot create the instance of that class. That class can be used directly like ClassName.methodName.

<pre><code>public static class Setting
{
    public static int fetchDefault()
    {
        int maxAmount = 0;
        //code to fetch and set the value from config or some file.
        return maxAmount;
    }
}

public class Sales
{
    //not required to create an instance.
    int maxAmount = Setting.fetchDefault();
}</code></pre>`,
      category: 'Intermediate',
      tags: ['static', 'class', 'method', 'memory']
    },
    {
      id: 19,
      question: 'Can we use "this" with the static class?',
      answer: 'No. "This" cannot be used with a static class because we can only use static variables and static methods in the static class.',
      category: 'Intermediate',
      tags: ['this', 'static', 'reference']
    },
    {
      id: 20,
      question: "What is the difference between constants and read-only?",
      answer: `• Constant variables have to be assigned a value at the time of declaration only, and we cannot change the value throughout the program.
• We can assign the value to the read-only variable at the time of declaration or in a constructor of the same class.

Constants example:
<pre><code>class DemoClass
{
    public const int myvar = 101;
    public const string str = "staticstring";
}</code></pre>

Read-only example:
<pre><code>class MyClass
{
    public readonly int myvar1;
    public readonly int myvar2;
    
    public MyClass(int b, int c)
    {
        myvar1 = b;
        myvar2 = c;
    }
}</code></pre>`,
      category: 'Intermediate',
      tags: ['const', 'readonly', 'immutable', 'initialization']
    },
    {
      id: 21,
      question: "What is the difference between string and string builder in C#?",
      answer: `A string is an immutable object. When we have to do some actions to change a string or append a new string it clears out the old value of the string object, and it creates a new instance in memory.

StringBuilder is a mutable object, meaning that it creates a new instance every time for the operations like adding string (append), replace string (replace). It uses the old object only for any of the operations done to the string and thus increases the performance.

String example:
<pre><code>string val = "Hello";
val += "World"; //creates a new instance</code></pre>

StringBuilder example:
<pre><code>StringBuilder val = new StringBuilder("Hello");
val.Append("World"); //uses same instance</code></pre>`,
      category: 'Intermediate',
      tags: ['string', 'stringbuilder', 'immutable', 'mutable', 'performance']
    },
    {
      id: 22,
      question: 'Explain the "continue" and "break" statement.',
      answer: `We can use continue and break statements in a loop in C#. Using a break statement, we can break the loop execution, while using the continue statement, we can break one iteration of the loop.

Break statement example:
<pre><code>for (int i = 0; i <= 5; i++)
{
    if (i == 4)
    {
        break; //this will break the loop
    }
    Console.WriteLine("The number is " + i);
}</code></pre>

Continue statement example:
<pre><code>for (int i = 0; i <= 5; i++)
{
    if (i == 4)
    {
        continue;// it will skip the single iteration
    }
    Console.WriteLine("The number is " + i);
}</code></pre>`,
      category: 'Intermediate',
      tags: ['break', 'continue', 'loop', 'control flow']
    },
    {
      id: 23,
      question: "What are boxing and unboxing?",
      answer: `Conversion of value type datatype to reference type (object) datatype is called boxing.

Boxing example:
<pre><code>int i = 10;
object o = i; // Boxing</code></pre>

Unboxing is the conversion of reference type datatype to value type.

Unboxing example:
<pre><code>object o = 222;
int i = (int)o; // Unboxing</code></pre>`,
      category: 'Intermediate',
      tags: ['boxing', 'unboxing', 'value type', 'reference type']
    },
    {
      id: 24,
      question: "What is a sealed class?",
      answer: `We use a "sealed" keyword to create a sealed class. Classes are created as a sealed class when there is no need to inherit that further or when there is a need to restrict that class from being inherited.

<pre><code>public sealed class MyClass
{
   //properties and methods
}</code></pre>`,
      category: 'Intermediate',
      tags: ['sealed', 'inheritance', 'restriction']
    },
    {
      id: 25,
      question: "What is a partial class?",
      answer: `There is a feature in the C# language to divide a single class file into multiple physical files. To achieve this, we have to use the "partial" keyword. At compile time, it is logically one file only; we cannot have a method with the same name or a variable with the same name in two different partial class files.

This feature is provided to facilitate developers to break down big class files into multiple small physical files.`,
      category: 'Intermediate',
      tags: ['partial', 'class', 'multiple files']
    },
    {
      id: 26,
      question: "What is enum?",
      answer: `The "enum" keyword is frequent across many languages. An enum is a type of value. It serves as a collection of related constants, which are referred to as an enumerated list.

An enum can be int, float, double, or byte. But if it's not an int, explicit casting is required.

<pre><code>enum Day { Sat, Sun, Mon, Tue, Wed, Thu, Fri };</code></pre>`,
      category: 'Intermediate',
      tags: ['enum', 'constants', 'enumeration']
    },
    {
      id: 27,
      question: "What is dependency injection, and how can it be achieved?",
      answer: `Dependency injection is a design pattern. Instead of creating an object of a class in another class (dependent class) directly, we are passing the object as an argument in the constructor of the dependent class.

There are three ways to achieve dependency injection:
• Constructor injection: Pass the dependency into the constructor
• Property injection: Use when we need the default constructor  
• Method injection: Pass the dependency in the method where it is required`,
      category: 'Advanced',
      tags: ['dependency injection', 'design pattern', 'constructor', 'loose coupling']
    },
    {
      id: 28,
      question: 'Please explain the "using" statement.',
      answer: `The keyword "using" is used to define the scope of the resources used in that using statement block. All the resources used inside the using code block get disposed of once the code block completes execution.

<pre><code>class Books : IDisposable
{
    private string _name { get; set; }
    private decimal _price { get; set; }
    
    public Books(string name, decimal price)
    {
        _name = name;
        _price = price;
    }
    
    public void Print()
    {
        Console.WriteLine("Book name is {0} and price is {1}", _name, _price);
    }
    
    public void Dispose()
    {
        // Cleanup code
    }
}

class Students
{
    public void DoSomething()
    {
        using (Books myBook = new Books("book name", 12.45))
        {
            myBook.Print();
        } // myBook is automatically disposed here
    }
}</code></pre>`,
      category: 'Advanced',
      tags: ['using', 'dispose', 'resource management', 'IDisposable']
    },
    {
      id: 29,
      question: "What are the access modifiers? Explain each type.",
      answer: `Access modifiers are keywords used to provide accessibility to a class, member, or a function.

• Public: Can be accessed anywhere without any restriction
• Protected: Access is limited up to the class, which inherits this class
• Internal: Can be accessed only within the current assembly
• Private: Cannot be accessed outside

<pre><code>public class Product
{
    public void Print()
    {
        //code to print something.
    }
}</code></pre>`,
      category: 'Beginner',
      tags: ['access modifiers', 'public', 'private', 'protected', 'internal']
    },
    {
      id: 30,
      question: "What are delegates?",
      answer: `Delegates are like function pointers, it is a reference data type that holds the reference of a method. We use delegates to write generic type-safe functions. All delegates derive from System.Delegate.

Characteristics:
• Delegates derive from the System.Delegate class
• Delegates have a signature as well as return type
• Delegates can point to instance methods or static methods
• Delegate objects can dynamically invoke methods at runtime
• Delegates can call methods synchronously and asynchronously

<pre><code>public delegate void Print(int value);

static void Main(string[] args)
{
    Print printDel = PrintNumber;
    printDel(100000);
    
    printDel = PrintMoney;
    printDel(10000);
}

public static void PrintNumber(int num)
{
    Console.WriteLine("Number: {0,-12:N0}", num);
}

public static void PrintMoney(int money)
{
    Console.WriteLine("Money: {0:C}", money);
}</code></pre>`,
      category: 'Advanced',
      tags: ['delegates', 'function pointers', 'reference', 'callback']
    },
    // Adding more cards for comprehensiveness
    {
      id: 31,
      question: "What is LINQ in C#?",
      answer: `LINQ refers to Language INtegrated Query. LINQ is a method of querying data using .NET capabilities and a C# syntax that's similar to SQL.

The advantage of LINQ is that we can query different sources of data. The data source could be collections of objects, XML files, JSON files, in-memory data or database objects.

<pre><code>List&lt;string&gt; mobiles = new List&lt;string&gt;() {
    "Iphone","Samsung","Nokia","MI"
};

//linq syntax
var result = from s in mobiles
             where s.Contains("Nokia")
             select s;</code></pre>`,
      category: 'Advanced',
      tags: ['LINQ', 'query', 'data', 'collections']
    },
    {
      id: 32,
      question: "What is serialization?",
      answer: `When we want to send an object through a network, then we have to convert that object into a stream of bytes. Serialization is the process of converting an object into a stream of bytes. 

To facilitate the object for serializable, it should implement ISerialize Interface. The process of de-serialization is the reverse process of creating an object from a stream of bytes.`,
      category: 'Advanced',
      tags: ['serialization', 'stream', 'network', 'ISerialize']
    },
    {
      id: 33,
      question: "What are generics in C#?",
      answer: `Generics in C#:
• increase performance
• increase type safety  
• reduce repeated code
• make reusable code

Using generics, we can create collection classes. Generics encourage the usage of parameterized types.

<pre><code>//We use &lt; &gt; to specify Parameter type 
public class GFG&lt;T&gt;
{
    private T data;
    public T value { get {return this.data; } set {this.data = value; }}
}

//instance of string type 
GFG&lt;string&gt; company = new GFG&lt;string&gt;();
company.value = "Tata motors";

//instance of float type 
GFG&lt;float&gt; version = new GFG&lt;float&gt;();
version.value = 6.0F;</code></pre>`,
      category: 'Advanced',
      tags: ['generics', 'type safety', 'performance', 'reusable']
    },
    {
      id: 34,
      question: "What is reflection?",
      answer: `Reflection is a particular class in C# used to access the metadata of the assembly or the class.

The following information can be retrieved using reflection:
• Assembly name
• Class name  
• Method name
• Object type
• It Identifies properties and methods`,
      category: 'Advanced',
      tags: ['reflection', 'metadata', 'assembly', 'runtime']
    },
    {
      id: 35,
      question: "How to use nullable types?",
      answer: `A null value can be assigned to a variable in C#. These types are called nullable types. Most variable types are nullable types.

<pre><code>class Calculate
{
    int? number = null;
    
    public Calculate(int num)
    {
        number = num;
    }
    
    public void DoCalculation()
    {
        if (number.HasValue)
        {
           //do something
        }
    }
}</code></pre>`,
      category: 'Advanced',
      tags: ['nullable', 'null', 'HasValue', 'value types']
    }
  ];

  getFlashcards(): Flashcard[] {
    return this.flashcards;
  }

  getFlashcardsByCategory(category: string): Flashcard[] {
    if (category === 'All') {
      return this.flashcards;
    }
    return this.flashcards.filter(card => card.category === category);
  }

  searchFlashcards(query: string): Flashcard[] {
    if (!query.trim()) {
      return this.flashcards;
    }

    const searchTerm = query.toLowerCase();
    return this.flashcards.filter(card =>
      card.question.toLowerCase().includes(searchTerm) ||
      card.answer.toLowerCase().includes(searchTerm) ||
      card.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }
}