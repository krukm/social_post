'use strict';

const postForm = {
    bindings: {
        onSubmit: '&'
    },
    template: `
    <form>
        <input type="text">
        <input type="textarea">
        <button>Add Post</button>
    </form>
    `
}

angular.module('app').component('postForm', postForm);