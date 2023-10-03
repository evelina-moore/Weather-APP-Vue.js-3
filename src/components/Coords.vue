<script setup>
const props = defineProps({
    coord: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <section class="section-bottom right">
        <div class="block-bottom">
            <div class="block-bottom-inner">
                <div class="block-bottom-pic pic-coords"></div>
                <div class="block-bottom-texts">
                    <div class="block-bottom-text-block">
                        <div class="block-bottom-text-block-title">
                            Longitude: {{ coord?.lon }}
                        </div>
                        <div class="block-bottom-text-block-desc">
                            Longitude measures distance east or west of the prime meridian.
                        </div>
                    </div>
                    <div class="block-bottom-text-block">
                        <div class="block-bottom-text-block-title">
                            Latitude: {{ coord?.lat }}
                        </div>
                        <div class="block-bottom-text-block-desc">
                            Latitude lines start at the equator (0 degrees latitude) and run east and
                            west, parallel to the equator.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>