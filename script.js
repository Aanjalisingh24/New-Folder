function unhappy(){
    if (document.getElementById("happy").textContent=="unhappy"){
        document.getElementById("image").src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/65532/happy-emoji-clipart-md.png"
        document.getElementById("happy").textContent="happy"
    }else{
        document.getElementById("image").src="https://emojiisland.com/cdn/shop/products/Unhappy_Face_Emoji_Icon_ios10_large.png?v=1571606093"
        document.getElementById("happy").textContent="unhappy"
    }
}