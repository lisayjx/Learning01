//获取所有按键
const keys = document.querySelectorAll(".piano button");
//遍历所有按键
keys.forEach(item => {
    item.addEventListener('click',() => playPiano(item.dataset.key))
})

const audioElement = document.querySelector("#audioElement")

const playPiano = key => {
    const url = `/audio/${key}.mp3`
    audioElement.src = url;
    audioElement.play()
}