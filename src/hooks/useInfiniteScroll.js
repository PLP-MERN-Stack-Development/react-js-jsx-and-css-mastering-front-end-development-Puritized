import { useEffect, useRef } from 'react'


export function useInfiniteScroll(callback) {
const sentinelRef = useRef(null)


useEffect(() => {
if (!sentinelRef.current) return
const io = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) callback()
})
io.observe(sentinelRef.current)
return () => io.disconnect()
}, [callback])


return sentinelRef
}