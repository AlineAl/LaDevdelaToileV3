# Welcome to my Astro project!

## 🚀 Basics to running this project

1. Install the dependencies

```sh
npm install
```

2. Run the project

```sh
npm run dev
```

## 🧠 Basics to contribute to this project

1. Fork the project (click on the fork button)
2. Clone the project on your local machine
3. Push your branch on your fork
4. Click on `contribute` on the project page
5. Click on `open a pull request`
6. Merge from your main branch to the main branch of this project

## Great ! Now you can start coding 🎉

### Add your resources or known resources in the `src/datas` folder

- Go to the `datas` folder
- Inside `datas` folder, go to the `skills` folder
- Click on the file that you want to edit
- Add your resources in the file with the following format:

```
    {
        title: 'Write title of the resource here',
        description: 'Add a low description',
        path: 'Share the path of the resource here'
    }
```

### Add your known **events** links in the `src/datas` folder

- Go to the `datas` folder
- Click on the `events.ts` file
- Add your event in the file with the following format:

```
    {
        title: 'Write title of the meetup here',
        description: 'Add a low description',
        path: 'Share the path of the meetup here',
        location: {
            city: 'Write the city of the meetup here',
            coordinates: [latitude of city, longitude of city]
        },
    }
```

### Add your known **podcasts** links in the `src/datas` folder

- Go to the `datas` folder
- Click on the `podcasts.ts` file
- Add your podcasts in the file with the following format:

```
    {
        title: 'Write title of the podcast here',
        description: 'Add a low description',
        path: 'Share the path of the podcast here'
    }
```

### Add your known **conferences** links in the `src/datas` folder

- Go to the `datas` folder
- Go to the `conferences` folder
- Go to the folder of the event that you want to add a conference
- Click on the file of the event that you want to add a conference with the following format:

```
    {
        title: 'Write title of the conference here',
        description: 'Add a low description',
        path: 'Share the path of the conference here',
        location: {
            city: 'Write the city of the conference here',
            address: 'Write the address of the conference here',
            coordinates: [latitude, longitude]
        },
    }
```

### Add your known **events around web development with conferences** links in the `src/datas` folder

/!\ Create an event around web development with conferences ONLY IF NOT EXISTS

1 - First, you need to create a folder

- Go to the `datas` folder
- Go to the `conferences` folder
- Create a new folder with the name of the conference. For example, if you want to add a new conference for AFUP, create a folder named `AFUP`
- Inside the folder, create, for example for AFUP, a file named `AFUPconferences.ts`
- Add in the file your conferences concerned by AFUP with the following format:

```
    {
        title: 'Write title of the conference here',
        description: 'Add a low description',
        path: 'Share the path of the conference here',
        location: {
            city: 'Write the city of the conference here',
            address: 'Write the address of the conference here',
            coordinates: [latitude, longitude]
        },
    }
```

2 - Second, you need to create a page

- Go to the `pages` folder
- Go to the `conferences` folder
- Create a new file with the following format. For example, if you want to add a new conference for AFUP, create a file named `AFUP.astro`:

```
    ---
    import Layout from "../../layouts/Layout.astro";
    import NavBar from "../../components/NavBar.astro";
    import { AFUPConferences } from "../../datas/conferences/AFUP/AFUPconferences";
    import List from "../../components/List.astro";
    ---
    <Layout title="AFUP" >
        <NavBar />
        <List data={AFUPConferences} imagePath="/_759b362e-6183-40dc-a54e-53a925c20be1.jpeg" />
    </Layout>
```

## Add a book in the `src/datas` folder

- Go to the `datas` folder
- Click on the `books.ts` file
- Add your books in the file with the following format:

```
    {
        title: 'Write title of the book here',
        author: 'Write author of the book here',
        description: 'Add a low description',
        path: 'Share the path of the book here',
        img: 'Share the path of image here',
        tags: [] (Add tags here, you can see tags to 'src/datas/tags')
    },
```

/!\ The `imagePath` is the path of the image of the book and I only want FERRET :D. You can less me to choose illustration. If you want to choose it, you need to add the image in the `public` folder and share the path of the image in the `imagePath` key. /!\

## Add your notes link in the `src/datas` folder

- Go to the `datas` folder
- Click on the `notes.ts` file
- Add your notes in the file with the following format:

```
    {
        title: 'Write title of the notes here',
        author: 'Write author of the notes here',
        description: 'Add a low description',
        path: 'Share the path of the notes here'
    },
```

### Add your known **communities** links in the `public/communities.json` files

- Go to the `public` folder
- Click on the file `communities.json` and add your community and his event plateform in the file. If your city doesn't exist, you can add it :

```
    [
        {
            "city": "Nantes",
            "communities": [
                {
                    "name": "HumanTalks-Nantes",
                    "platform": "meetup"
                }
        }
    ]
```

## To run the app as a service into a docker container

- You need to have docker installed on your machine, please follow https://docs.docker.com/get-started/get-docker/

```
docker build -t ladevdelatoile:latest .
docker run --name ladevdelatoile -p 4321:4321 ladevdelatoile:latest
```

- You can now access the application in your browser at: http://localhost:4321
- If you want to stop the container, please use:

```
docker stop ladevdelatoile
```

## 🔥 Thank you for contributing every day to making this project even better!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://jeanphi-baconnais.gitlab.io/"><img src="https://avatars.githubusercontent.com/u/32639372?v=4?s=100" width="100px;" alt="Jean-Phi Baconnais"/><br /><sub><b>Jean-Phi Baconnais</b></sub></a><br /><a href="https://github.com/AlineAl/LaDevdelaToileV3/commits?author=jeanphi-baconnais" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://laraveljutsu.net"><img src="https://avatars.githubusercontent.com/u/36139526?v=4?s=100" width="100px;" alt="Ludovic Guénet"/><br /><sub><b>Ludovic Guénet</b></sub></a><br /><a href="https://github.com/AlineAl/LaDevdelaToileV3/commits?author=ludoguenet" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.mouclepatrick.com"><img src="https://avatars.githubusercontent.com/u/20593460?v=4?s=100" width="100px;" alt=" Patrick Sheron Moucle"/><br /><sub><b> Patrick Sheron Moucle</b></sub></a><br /><a href="https://github.com/AlineAl/LaDevdelaToileV3/commits?author=shelbon" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/frontcodelover"><img src="https://avatars.githubusercontent.com/u/98742791?v=4?s=100" width="100px;" alt="Nicolas"/><br /><sub><b>Nicolas</b></sub></a><br /><a href="https://github.com/AlineAl/LaDevdelaToileV3/commits?author=frontcodelover" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://arnaudban.me"><img src="https://avatars.githubusercontent.com/u/1626370?v=4?s=100" width="100px;" alt="Arnaud Banvillet"/><br /><sub><b>Arnaud Banvillet</b></sub></a><br /><a href="https://github.com/AlineAl/LaDevdelaToileV3/commits?author=ArnaudBan" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/hectormarchand"><img src="https://avatars.githubusercontent.com/u/105730133?v=4?s=100" width="100px;" alt="Hector Marchand"/><br /><sub><b>Hector Marchand</b></sub></a><br /><a href="https://github.com/AlineAl/LaDevdelaToileV3/commits?author=hectormarchand" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/glavirotte"><img src="https://avatars.githubusercontent.com/u/49607050?v=4?s=100" width="100px;" alt="gLavirotte"/><br /><sub><b>gLavirotte</b></sub></a><br /><a href="https://github.com/AlineAl/LaDevdelaToileV3/commits?author=glavirotte" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://venturino.site"><img src="https://avatars.githubusercontent.com/u/34771970?v=4?s=100" width="100px;" alt="Eric Venturino"/><br /><sub><b>Eric Venturino</b></sub></a><br /><a href="https://github.com/AlineAl/LaDevdelaToileV3/commits?author=ventustyl" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/D-Sriver"><img src="https://avatars.githubusercontent.com/u/112690493?v=4?s=100" width="100px;" alt="D.Sriver"/><br /><sub><b>D.Sriver</b></sub></a><br /><a href="https://github.com/AlineAl/LaDevdelaToileV3/commits?author=D-Sriver" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
