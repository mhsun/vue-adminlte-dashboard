<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{ title }}</h3>

            <div class="card-tools">
                <span class="badge badge-danger">{{ memberList.length }} New</span>
                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <em class="fas fa-minus"></em>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <em class="fas fa-times"></em>
                </button>
            </div>
        </div>

        <div class="card-body p-0">
            <ul class="users-list clearfix">
                <member-list-item v-for="member in memberList"
                                  :name="member.name"
                                  :img-src="member.image"
                                  profile-path="/"
                />
            </ul>
        </div>

        <div class="card-footer text-center">
            <router-link :to="route">View All Users</router-link>
        </div>
    </div>
</template>

<script>
    import MemberListItem from "../partial/ui/MemberListItem";

    export default {
        name: "MemberList",
        components: {
            MemberListItem
        },
        props: {
            title: {
                type: String,
                default: 'Latest Members'
            },
            memberList: {
                type: Array,
                required: true
            },
            route: {
                type: String,
                default: '/'
            }
        }
    }
</script>

<style scoped>

</style>