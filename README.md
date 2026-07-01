## First-Time Setup

This project is built using [npm](https://www.npmjs.com/) and [Hugo](https://gohugo.io/), and deployed using [GitHub Pages](https://docs.github.com/en/pages). The current directory structure is only compatible with specific tested versions of npm and Hugo, so the latest versions may not work correctly. It has been confirmed working with:

```console
$ npm --version
10.8.2
```

```console
$ hugo version
hugo v0.148.1-98ba786f2f5dca0866f47ab79f394370bcb77d2f+extended linux/amd64 BuildDate=2025-07-11T12:56:21Z VendorInfo=gohugoio
```

Run the following command to setup the dependencies:

```console
$ npm install
```

## Usage

| Command            |                                                       Action |
| :----------------- | -----------------------------------------------------------: |
| `npm run dev`      |                  Starts local dev server at `localhost:1313` |
| `npm run prettier` | Formats project files using [Prettier](https://prettier.io/) |

## Housekeeping

### Removing Unwanted Deployment

To list out all the deployments, run the following command:

```console
gh api \
  --method GET \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/luethan2025/luethan2025.github.io/deployments
```

You will get all the deployments for this repository.

```console
[
  {
    "url": "https://api.github.com/repos/{username}/{repo}/deployments/{id}",
    "id": {id},
    ...
  }
]
```

From this list, pick the `id` you want to remove and run the command below:

```console
gh api \
  --method DELETE \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/luethan2025/luethan2025.github.io/deployments/{id}
```
