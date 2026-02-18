"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DocDescFeature = {
    anvil: `### Anvil
Defines the primary container in **Hova**.

- Groups everything
- Can have metadata through \`atomic\`
- Emits a structured output

---

\`\`\`hova
anvil MyWorld
  ...
end
\`\`\`

---

See also:
- ore
- spark
- atomic
`,
    atomic: `### Atomic
Defines a metadata block inside an \`anvil\`.

- Groups **atoms**
- Used to describe the anvil context

---

**Example:**
\`\`\`hova
anvil myWorld

    atomic
        ...
    end

end
\`\`\`

---

See also:
- atom
- anvil
`,
    ore: `### Ore
Represents an entity/object inside an \`anvil\`.

- Contains **sparks** as its properties

---

**Example:**
\`\`\`hova
anvil MyWorld

    ore Entity
        ...
    end

end
\`\`\`

---

See also:
- spark
- anvil

`,
    cave: `### Cave
Represents a container inside an \`anvil\`.

- Can only contains **ore**'s inside
- Only used to organize

---

**Example:**
\`\`\`hova
anvil MyWorld

    cave Birds

        ore Hawk
        end

        ore Macaw
        end

    end

    cave Wild

        ore Lion
        end

        ore Tiger
        end

    end

end
\`\`\`
`,
    spark: `### Spark
Represents a property of an \`ore\`.

- Available types: str, int, float, list, bool and sufx
- Cannot reference other sparks

---

\`\`\`hova
ore Square
    spark sides int : 4  
    spark text str : "square"
    spark hasFourSides bool : true
    spark ratio float : 0.5
    spark others list : []
end
\`\`\`

---

See also:
- ore
`,
    atom: `### Atom
Represents a metadata value inside \`atomic\`.

- Only string values
- Must be unique

\`\`\`hova
atomic
    atom creator : "CreatorName"
    atom emit : "yaml"
    atom description : "This anvil is ...."
    atom created_at : "0000-00-00"
end
\`\`\`

See also:
- atomic
- anvil
- emit
- outDir
- creator
`,
    emit: `### emit
Defines which format the \`anvil\` will be emitted as.

\`\`\`hova
anvil MyWorld
    atomic
        .. Here I define that this anvil will be emitted like yaml
        atom emit : "yaml"
    end
end
\`\`\`

---

See also:
- anvil
`,
    creator: `### Creator
Defines what's the \`anvil\`'s creator name.

---

\`\`\`hova
anvil MyWorld
    atomic
        atom creator : "CreatorOfMyWorld"
    end
end
\`\`\`

---

See also:
- anvil
`,
    outDir: `### outDir
Defines name of directory that the file emitted will be added.

---

\`\`\`hova
anvil MyWorld
    atomic
        atom outDir : "MyItems"
    end
end
\`\`\`
`,
    visual: `### visual
Defines which emite's pattern will be applied on JSON/YAML/TOML file.

In *Hova 1.95*, you can use two options: "minimal" or "default"

---

\`\`\`hova
anvil MyWorld
    atomic
        ..The visual's default value is "default"
        atom visual : "minimal" 
    end
end
\`\`\`

What apply:
- Remove 'types' in SparkDefiner.
- Remove "ores", "caves" and "sparks" keys from file.
`,
    hideConfig: `### hideConfig
Hide the "config" key from AtomicEncompass on the Emite's time.

---

Use:
\`\`\`hova
anvil myWorld
    atomic
        atom hideConfig : "on" 
    end
end
\`\`\`

Does it:
\`\`\`json
"myWorld": {
    "atomic": {
        "config": { ... } <- Hide it
    }
}
\`\`\`
`,
    hideAtomic: `### hideAtomic
Hide the "atomic" key and everything that is inside it.

---

Use:
\`\`\`hova
anvil myWorld
    atomic
        atom hideAtomic : "on" 
    end
end
\`\`\`

Does it:
\`\`\`json
"myWorld": {
    "atomic": { ... } <- Hide it
}
\`\`\`
`,
    str: `### StringLiteral
Represents characters between "" or ''.
`,
    int: `### IntegerLiteral
Represents a integer number.
`,
    float: `### FloatingLiteral
Represents a floating number.
`,
    bool: `### BooleanLiteral
Represents true of false.
`,
    list: `### ListLiteral
Represents a list of values from different types, that is inside '[...]'.
`,
    sufx: `### SufixNumbersLiteral
Represents a string that receive compact number values.

Example:
Converts "1k" to 1000
Converts "1m" to 1000000

It easily to define big numbers, that have many zeros. 
`
};
exports.default = DocDescFeature;
//# sourceMappingURL=hovaDocs.js.map