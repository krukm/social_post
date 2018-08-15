'use strict';

const post = {
    bindings: {
        post: '<'
    },
    template: `
    <section class="section__post">
    <p class="p__title"> {{ $ctrl.post.title }} </p>
    <p class="p__text"> {{ $ctrl.post.text }} </p>
    <button class="material-icons btn__close" type="button">close</button>
    </section>
    `

}

angular.module('app').component('post', post);