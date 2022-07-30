# messonry

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![license](https://img.shields.io/github/license/nickadamson/messonry.svg)](LICENSE)

A messy grid layout library for React. Like a masonry layout; except that it crops images as little as possible, and
displays them as close to their original aspect ratio as possible.

![banner](./preview.png)

## Table of Contents

- [Install](#install)
- [Usage](#usage)
<!-- - [API](#api) -->
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install

```
npm i messonry
```

or

```
yarn add messonry
```

## Usage

```
import MessonryGrid from "messonry";

const Component = () => {
    const media: GridItem[] = [
        { src: '<URL>', mimeType: "image" || "video" },
        ...
    ]

    return (
        <>
            <MessonryGrid items={media} />
        </>
    )
}
```

<!-- ## API -->
<!-- TODO -->

## Maintainers

[@nickadamson](https://github.com/nickadamson)

## Contributing

<!-- TODO See [the contributing file](CONTRIBUTING.md)! -->

PRs accepted.

Small note: If editing the README, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

[MIT © 2022 Nick Adamson](../LICENSE)
