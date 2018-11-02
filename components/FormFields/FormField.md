```jsx
<FormField
    type='text'
    id='ff-untouched'
    placeholder='Your Name'
    meta={{ touched: false }} />
```

```jsx
<FormField
    type='text'
    id='ff-touched'
    placeholder='Your Name'
    input={{ defaultValue: 'John Doe' }}
    meta={{ touched: true, dirty: true }} />
```

```jsx
<FormField
    type='text'
    id='ff-valid'
    placeholder='Your Name'
    input={{ defaultValue: 'John Doe' }}
    meta={{ touched: true, dirty: true, valid: true }} />
```

```jsx
<FormField
    type='text'
    id='ff-error'
    placeholder='Your Name'
    input={{ defaultValue: 'John Doe' }}
    meta={{ touched: true, dirty: true, error: 'That\s not your real name, is it!?'  }} />
```
