# Data Model Definition Documentation

## Overview

This document describes the format and usage of the schema definition system for creating structured data models. The system allows defining entities, their properties, and relationships in a YAML-based format that can be used for documentation, validation, and code generation.

## Basic Structure

The definition uses a YAML structure with an `elements` array that contains entity type definitions. Each entity type has fields, validation rules, and relationship definitions.

### Core Components

```yaml
elements:
  - name: [entity_name]
    identity: code  # Human-readable identifier
    fields:
      - name: code
        type: string
        required: true
        # other field properties
      - name: [field_name]
        type: [field_type]
        required: [boolean]
        # other field properties
```

## Entity Definition

Each entity is defined as an element with the following properties:

| Property | Description | Required |
|----------|-------------|----------|
| `name` | Unique identifier for the entity type | Yes |
| `identity` | Field name that serves as the primary identifier (typically `code`) | Yes |
| `fields` | Array of field definitions | Yes |

## Field Definition

Fields define the properties of an entity and have the following structure:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| `name` | Field identifier | string | Yes |
| `type` | Data type | string, number, boolean, array, object | Yes |
| `required` | Whether field is mandatory | boolean | No (defaults to false) |
| `nullable` | Whether field can be null | boolean | No (defaults to false) |
| `validation` | Validation rules | object | No |
| `fields` | Nested fields (for object types) | array | For object types |

## Field Types

The system supports the following field types:

| Type | Description | Example |
|------|-------------|---------|
| `string` | Text value | Name, description, identifier |
| `number` | Numeric value | Count, amount, score |
| `boolean` | True/false value | Is active, is deleted |
| `array` | List of values | Tags, categories, related items |
| `object` | Nested structure | Address, metadata, settings |

## Validation Rules

Validation rules define constraints on field values:

| Rule | Description | Example |
|------|-------------|---------|
| `enumSource` | Reference to another entity type | `enumSource: location` |
| `min`/`max` | Value range for numbers | `min: 0, max: 100` |
| `pattern` | Regex pattern for strings | `pattern: "^[A-Z][a-z]+$"` |

## Relationships

Relationships between entities are defined through fields with validation rules:

```yaml
- name: location
  type: string
  validation:
    enumSource: location  # References the 'location' entity
```

For one-to-many relationships, use array types:

```yaml
- name: employees
  type: array
  validation:
    enumSource: employee  # References multiple 'employee' entities
```

## Nested Objects

Complex structures can be created using object types with nested fields:

```yaml
- name: legacy
  type: object
  nullable: true
  fields:
    - name: description
      type: string
```

## Complete Example

```yaml
elements:
  - name: department
    identity: code
    fields:
      - name: code
        type: string
        required: true
        description: "Human-readable department code (e.g., 'HR', 'IT', 'FIN')"
      - name: name
        type: string
        required: true
      - name: location
        type: string
        validation:
          enumSource: location
      - name: manager
        type: string
        validation:
          enumSource: employee
```

## Recommended Modifications

Based on best practices for data modeling, the following modifications are recommended:

1. **Add data types for numeric fields**: Specify integer, float, or decimal for numeric fields
2. **Add string formats**: Email, URL, date, datetime for specialized string fields
3. **Add documentation fields**: Add description for fields to improve self-documentation
4. **Add validation parameters**: Min/max length for strings, value ranges for numbers
5. **Versioning support**: Add schema version information
6. **Default values**: Support default values for fields

## Implementation Example with Modifications

```yaml
version: "1.0"
description: "Organization data model"
elements:
  - name: employee
    identity: code
    description: "Employee information"
    fields:
      - name: code
        type: string
        required: true
        description: "Human-readable employee code (e.g., 'JD001', 'MS042')"
      - name: email
        type: string
        format: email
        required: true
        description: "Employee email address"
      - name: hireDate
        type: string
        format: date
        description: "Date employee was hired"
      - name: salary
        type: number
        format: decimal
        description: "Employee salary"
        validation:
          min: 0
      - name: department
        type: string
        description: "Employee's department"
        validation:
          enumSource: department
```

## Best Practices

1. **Use consistent naming**: Follow a consistent convention (camelCase, snake_case)
2. **Define clear relationships**: Make entity relationships explicit
3. **Provide meaningful descriptions**: Document purpose of entities and fields
4. **Consider validation needs**: Include all necessary validation for data integrity
5. **Think about extensibility**: Design the model to accommodate future changes
6. **Balance specificity and flexibility**: Too rigid models are hard to maintain, too flexible ones provide inadequate validation
