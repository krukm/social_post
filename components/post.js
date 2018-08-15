'use strict';

const post = {
    bindings: {
        post: '<'
    },
    template: `
    <p class="p__title"> {{ $ctrl.post.title }} </p>
    <p class="p__text"> {{ $ctrl.post.text }} </p>
    <p></p>
    `

}

angular.module('app').component('post', post);