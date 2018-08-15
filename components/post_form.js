'use strict';

const postForm = {
    bindings: {
        onSubmit: '&'
    },
    template: `
    <form ng-submit="$ctrl.onSubmit({ newPost: $ctrl.postContent });">
        <input type="text" ng-model="$ctrl.postContent.title">
        <input type="textarea" ng-model="$ctrl.postContent.text">
        <button>Add Post</button>
    </form>
    `
}

angular.module('app').component('postForm', postForm);