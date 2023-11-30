export default function (refValue) {
    return {
        mounted() {
            this.$refs[refValue].addEventListener('scroll', this.handleScroll)
        },
        created() {
            this.$bus.$on('setMainScroll', this.handleMainScroll)
        },
        beforeDestroy() {
            this.$bus.$emit('mainScroll')
            this.$bus.$off('setMainScroll', this.handleMainScroll)
            this.$refs[refValue].removeEventListener('scroll', this.handleScroll)

        },
        methods: {
            handleMainScroll() {
                this.$refs[refValue].scrollTop = 0
            },
            handleScroll() {
                this.$bus.$emit('mainScroll', this.$refs[refValue])
            },
        }
    }
}