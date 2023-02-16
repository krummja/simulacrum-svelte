---
title: SQLAlchemy Tricks
date: "9/30/2022"
---

## Creating Expressive Models

```python
from flask_sqlalchemy import SQLAlchemy

DB = SQLAlchemy()

class Company(DB.Model):
    __tablename__ = 'Company'
    
    company_uid = Column(String, primary_key=True)
    company_name = Column(String)
    quotes = DB.relationship('Quote', backref='Company', lazy=True)
```
