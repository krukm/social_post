'use strict';

const socialPosts = {
    template: `
        <h1 class="h1">My Thoughts</h1>
        <section class="section__container">
            <button class="btn__add-post" type="button" ng-click="$ctrl.toggleDisplay();">New Thought</button>
            <section class="section__form">
                <post-form ng-hide="$ctrl.toggleElements" on-submit="$ctrl.onSubmit(newPost);"></post-form>
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
        vm.toggleElements = true;

        vm.toggleDisplay = () => {
            vm.toggleElements = false;
        };
        vm.onSubmit = (newPost) => {
            vm.toggleElements = true;
            console.log("adding new post: " + newPost.title);
            //could also pass angular.copy(newPost)
            vm.postList.unshift({
                title: newPost.title,
                text: newPost.text
            });
        };

        function expandOnFocus() {
            return {
                restrict: "A",
                replace: false,
                link: function ($scope, $element, $attrs) {
                    $element.on("focus", () => {
                        $element
                    .css("width", "200px")
                    .css("height", "50px")
                    .css("font-size", "40px")
                    });
                $element.on("blur",  () => {
                    $element
                    .css("width", "")
                    .css("height", "")
                    .css("font-size", "")
                });
                }
            };
        }
    }


}

angular.module('app').component('socialPosts', socialPosts);