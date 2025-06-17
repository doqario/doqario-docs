---
title: "Rules"
---
# Rules 

#### What are “definition rules”?

**Definition rules** are a set of standardized guidelines that describe how to create, name, and document data fields in systems like APIs, forms, or databases. Their main goal is to ensure data consistency, clarity, and compatibility across different systems and teams.

These rules cover aspects like:

- naming conventions for fields,
- date, number, and currency formats,
- use of international standards (e.g., ISO),
- marking fields as required or optional,
- providing examples and allowed values (enums).

Well-defined rules help prevent errors, make data easier to validate, and streamline communication between systems and developers.

## Definition Rules

## Definition Rules

| Rule Name              | Description                                                                                   |
|------------------------|-----------------------------------------------------------------------------------------------|
| **Consistency**        | Use a consistent naming and formatting style throughout the entire document.                 |
| **ISO Standards**      | Prefer international standards (e.g., ISO 8601 for dates).                                    |
| **Lowercase**          | Field names should be written in lowercase, e.g., `first_name`, `email`.                     |
| **Snake_case**         | Use underscores (`_`) instead of spaces or camelCase for field names.                        |
| **Clear Descriptions** | Every field should have a short, clear description and a valid example.                      |
| **Required / Optional**| Indicate whether a field is `[required]` or `[optional]`.                                     |
| **No Ambiguity**       | Be specific about data types, formats, and constraints.                                      |
| **Enumerated Values**  | Use enumerations for fields with a fixed set of values, e.g., `status: active | inactive`.   |
| **Deprecated Fields**  | Clearly mark fields that are no longer in use as `[deprecated]`.                             |
| **Examples**           | Provide at least one valid example for each field.                                           |



### Data Formatting Rules

| Field              | Format                     | Description                                                                 |
|--------------------|----------------------------|-----------------------------------------------------------------------------|
| Date               | YYYY-MM-DD (ISO 8601)      | Year-month-day according to ISO 8601, e.g., 2025-04-11                      |
| Date & Time        | YYYY-MM-DDTHH:MM:SSZ       | ISO 8601 full datetime in UTC, e.g., 2025-04-11T14:30:00Z                   |
| First Name         | Capitalized                | First letter capital only, no numbers, e.g., "John"                         |
| Last Name          | Capitalized                | Same as above, e.g., "Smith"                                               |
| Email              | example@domain.com         | A valid email address                                                       |
| Phone Number       | +48 123 456 789            | International format with spaces                                            |
| Amount             | 1234.56                    | Use a dot as the decimal separator                                          |
| Currency           | PLN / USD / EUR            | 3-letter ISO currency code                                                  |
| Postal Code        | 00-000                     | Two digits, dash, three digits                                              |
| Country Code       | PL / DE / US               | 2-letter ISO 3166-1 alpha-2 country code                                    |
| Language Code      | pl / en / de               | 2-letter ISO 639-1 language code                                            |
| Boolean            | true / false               | Lowercase, boolean values only                                              |
| File Extension     | .jpg / .png / .pdf         | Allowed file extensions                                                     |
| Hex Color Code     | #RRGGBB                    | HTML hex color format, e.g., `#FF5733`                                      |
| Time               | HH:MM                      | 24-hour time format, e.g., `14:30`                                          |


