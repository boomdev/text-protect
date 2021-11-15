# TEXT-PROTECT - encrypt and decrypt text without ever saving its clear content on file

This project is meant to provide a "safe" way to encrypt some text on your device without having to save said text in a file (in order to not leave any trace of the text).

## Usage basics

Text-Protect can simply be used by opening the `index.html` file that is in the GitHub release.
This is a self containing file that has all dependencies required in it (CryptoJS).
You can copy `index.html` and use it independently of anything else. It does not require an internet connection to work.
Alternatively, you could clone this repo, run `yarn install` to install its dependencies, then `grunt` to generate `index.html` locally.

## Best practice

In this day and age, it's hard to tell if your device is 'safe'. It may have been compromised by simply browsing the web. Or maybe your network got breached.
In any case, you could have:

- A key logger (malicious software that captures all your key presses)
- Live monitoring/trojan viruses that can see what you are doing with your device
- A malicious browser plugin/extension
- ...

Before using Text-Protect to encrypt sensitive information, you should:

- Save a copy of Text-Protect's index.html file
- Copy it on a CLEAN thumb drive (format it beforehand) - make sure that `index.html` is the only file
- Get a clean bootable DVD or bootable USB stick of your favorite (Linux distro) / OS
- Boot into your (clean) OS - don't connect it to the Internet, ever.
- Run Text-Protect's index.html from the thumbdrive
- Use a password/passphrase that no one knows and that is hard to guess
- Don't forget your password/passphrase

## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# License

This software is available under The MIT License (MIT)
Copyright (c) 2021 billify (boomdev)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject
to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.
