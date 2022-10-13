const storyId = document.getElementById('storyId')
const viewStoryButton = document.getElementById('viewStoryButton')
const storyTitle = document.getElementById('storyTitle')
const storyURL = document.getElementById('storyURL')
const storyAuthor = document.getElementById('storyAuthor')
const storyTime = document.getElementById('storyTime')


viewStoryButton.addEventListener('click', function() {
    async function getStory() {
        let url = `https://hacker-news.firebaseio.com/v0/item/${storyId.value}.json?print=pretty`
        let response = await fetch(url)
        let story = await response.json()
        console.log(story)

        storyTitle.innerHTML = `<a href="${story.url}">${story.title}</a>`
        storyAuthor.innerHTML = `By: ${story.by}`

        let unixTime = story.time
        let date = new Date(unixTime * 1000)
        storyTime.innerHTML = `Published on: ${(date.toLocaleDateString("en-US"))}`
    }
    getStory()
})