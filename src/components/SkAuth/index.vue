<script>
  import { checkAuth } from '@/utils/auth'
  export default {
    name: 'SkAuth',
    functional: true,
    props: {
      authority: {
        type: Array,
        required: true,
      },
    },
    render(h, context) {
      const { props, scopedSlots } = context
      return checkAuth(props.authority) ? scopedSlots.default() : null
    },
  }
</script>
