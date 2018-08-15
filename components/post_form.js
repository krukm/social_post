'use strict';

const postForm = {
    bindings: {
        onSubmit: '&'
    },
    template: `
    <form class="form__new-post" ng-submit="$ctrl.onSubmit({ newPost: $ctrl.postContent });">
        <label for="title">Title</label>
        <input expand-on-focus class="input__title" type="text" ng-model="$ctrl.postContent.title" placeholder="Post title">
        <label for="text">Thought</label>
        <textarea expand-on-focus class="textarea__text" ng-model="$ctrl.postContent.text"></textarea>
        <button class="btn__submit">Add Post</button>
    </form>
    `
}

angular.module('app').component('postForm', postForm);