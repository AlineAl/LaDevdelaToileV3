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

### Add your known **VNements** links in the `src/datas` folder
- Go to the `datas` folder
- Click on the `VNements.ts` file
- Add your VNements in the file with the following format:
```
    {
        title: 'Write title of the meetup here',
        description: 'Add a low description',
        path: 'Share the path of the meetup here'
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
        path: 'Share the path of the conference here'
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
        path: 'Share the path of the conference here'
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
        imagePath: './_5c777f50-f03f-4e3e-8035-84d6d137a34e-removebg-preview.png',
        path: 'Share the path of the book here'
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
        imagePath: '/_7cc475b6-8a8e-4ce1-b1c1-cc6084f92ded-removebg-preview.png',
        path: 'Share the path of the notes here'
    },
```
/!\ The `imagePath` is the path of the image of the book and I only want FERRET :D. You can less me to choose illustration. If you want to choose it, you need to add the image in the `public` folder and share the path of the image in the `imagePath` key. /!\
        
        