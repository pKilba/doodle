mergeInto(LibraryManager.library, {
    ShowWallet: function() {
        document.getElementById('connect-container').style.display = 'block';
    },
    HideWallet: function() {
        document.getElementById('connect-container').style.display = 'none';
    }
});
