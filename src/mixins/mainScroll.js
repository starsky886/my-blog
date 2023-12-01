export default function (refValue) {
    return {
        mounted() {
            this.$refs[refValue].addEventListener('scroll', this.handleMainScroll)
        },
        created() {
            this.$bus.$on('setMainScroll', this.setHandleMainScroll)
        },
        beforeDestroy() {
            this.$bus.$emit('mainScroll')
            this.$bus.$off('setMainScroll', this.setHandleMainScroll)
            this.$refs[refValue].removeEventListener('scroll', this.handleMainScroll)

        },
        methods: {
            setHandleMainScroll() {
                this.$refs[refValue].scrollTop = 0
            },
            handleMainScroll() {
                this.$bus.$emit('mainScroll', this.$refs[refValue])
            },
        }
    }
}