'use strict';

const socialPosts = {
    template: `
        <h1 class="h1">My Thoughts</h1>
        <post-form></post-form>
        <section class="section__posts">
        <posts ng-repeat="post in $ctrl.postList" post="post"></posts>
        </section>
    `,
    controller: function() {
        const vm = this;

        vm.postList = [
            {
                title: 'Just another day',
                text: 'Woke up, did my morning thing, then went to school...'
            },
            {
                title: 'Hello',
                text: 'This is my first post, great to be here!'
            }
        ]
    }


}

angular.module('app').component('socialPosts', socialPosts);