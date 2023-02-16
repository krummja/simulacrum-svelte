---
id: 0wdzksdn80a88us1csa4n40
title: Notes
desc: ''
updated: 1666704844303
created: 1666704340660
---

## General notes on SQLAlchemy

Note that for each of the following, any `select` statement can be executed on the ORM API by calling `session.query(<Mapped Class>)`.

Assuming the existing of a mapped classed `Company` and `Contact`, the following are equivalent:

### Basic `SELECT`

```py
subq = select(Contact)
```

```sql
SELECT * FROM Contact;
```

### `SELECT` specific columns

```py
subq = select(Contact.company_id, Contact.first_name)
```

```sql
SELECT company_id, first_name FROM Contact;
```


### `SELECT` with `WHERE` clause

```py
subq = (
    select(Contact)
    .where(Company.id == Contact.company_id)
)
```

```sql
SELECT * FROM Contact WHERE Company.id = Contact.company_id;
```

### `SELECT` with `NOT EXISTS` subquery

```py
subq = (
    select(Contact)
    .where(Company.id == Customer.company_id)
    .exists()
)

q = select(Company).where(~subq)
```

```sql
SELECT *
FROM Contact
WHERE NOT (
    EXISTS (
        SELECT *
        FROM Company
        WHERE Contact.company.id = Company.id
    )
);
```


```sql
SELECT DISTINCT "Contact".contact_uid
    , "Contact".customer_uid
    , "Contact".source_uid
    , "Contact".city_desc
    , "Contact".email_address
    , "Contact".contact_first_name
    , "Contact".contact_last_name
    , "Contact".job_title_desc
    , "Contact".main_phone_number
    , "Contact".mobile_phone_number
    , "Contact".addr_postal_code
    , "Contact".addr_state_code
    , "Contact".addr_line1_desc
    , "Contact".addr_line2_desc
    , "Contact".company_name
    , "Contact".source_modify_timestamp
FROM 
    "Contact"
WHERE NOT (
    EXISTS (
        SELECT id_map.datawarehouse_id 
        FROM id_map
    )
);
```
