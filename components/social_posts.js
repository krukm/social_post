'use strict';

const socialPosts = {
    template: `
        <h1 class="h1">My Thoughts</h1>
        <section class="section__container">
            <button class="btn__add-post" type="button">New Thought</button>
            <section class="section__form">
                <post-form on-submit="$ctrl.onSubmit(newPost);"></post-form>
            </section>
            <section class="section__posts">
                <post ng-repeat="post in $ctrl.postList" post="post"></post>
            </section>
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
        vm.onSubmit = (newPost) => {
            console.log("adding new post:" + newPost.title);
            vm.postList.unshift({
                title: newPost.title,
                text: newPost.text
            });
        };
    }


}

angular.module('app').component('socialPosts', socialPosts);