# react-airbnb-embed

[![NPM](https://img.shields.io/npm/v/react-airbnb-embed.svg)](https://www.npmjs.com/package/react-airbnb-embed) [![GitHub stars](https://img.shields.io/github/stars/matyik/react-airbnb-embed?style=social)](https://github.com/matyik/react-airbnb-embed) ![NPM Downloads](https://img.shields.io/npm/dw/react-airbnb-embed)

A React component that allows you to embed an Airbnb listing in your web application. Compatible with server-side rendering using Next.js.

## Installation

You can install the package via npm:

```bash
npm install react-airbnb-embed
```

## Usage

Once installed, you can use the `Airbnb` component by importing it in your code and passing the necessary props.

```javascript
import React from 'react'
import { Airbnb } from 'react-airbnb-embed'

const MyComponent = () => {
  return <Airbnb id='123456' name='Listing' />
}

export default MyComponent
```

<img width="400px" height="auto" src="https://github.com/matyik/react-airbnb-embed/raw/main/screenshot.png">

## Props

The Airbnb component accepts the following props:

- `id` (required): The ID of the Airbnb listing that you want to embed.
- `name` (required): The name of the Airbnb listing that you want to embed.
- `reviews` (optional, default true): Whether to show or hide the reviews section.
- `nofollow` (optional, default false): Whether to add the nofollow attribute to the links.

## License

This package is open-sourced software licensed under the [MIT license](https://opensource.org/license/mit/ 'MIT license').
