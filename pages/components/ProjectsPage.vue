<script setup lang="ts">
import ProjectsPageProject from "./ProjectsPageProject.vue";
</script>

<template>
    <ProjectsPageProject
        :title="'ProTeGe v1'"
        :icons="[
            { title: 'c++', url: '/assets/icons/dev/cpp/icon.svg' },
            { title: 'wxWidgets', url: '/assets/icons/dev/wxWidgets/icon.svg' },
        ]"
        :links="{ github: '#', docs: '#' }"
    >
        <p>Procedural texture generator (CPU, multi-threaded).</p>
    </ProjectsPageProject>

    <ProjectsPageProject
        :title="'ProTeGe v2'"
        :icons="[
            { title: 'unity', url: '/assets/icons/dev/unity/icon.svg' },
            { title: 'csharp', url: '/assets/icons/dev/csharp/icon.svg' },
            { title: 'hlsl', url: '/assets/icons/dev/hlsl/icon.svg' },
        ]"
    >
        <p>
            Procedural texture generator with graph-based UI and real-time
            preview (GPU).
        </p>
    </ProjectsPageProject>

    <ProjectsPageProject
        :title="'DQ skinning for Unity'"
        :icons="[
            { title: 'unity', url: '/assets/icons/dev/unity/icon.svg' },
            { title: 'csharp', url: '/assets/icons/dev/csharp/icon.svg' },
            { title: 'hlsl', url: '/assets/icons/dev/hlsl/icon.svg' },
        ]"
    >
        <p>
            Implementation of GPU dual quaternion skinning for Unity with a
            novel bulging compensation algorithm and blend shape support.
        </p>
    </ProjectsPageProject>

    <ProjectsPageProject
        :title="'dice-pool-calc'"
        :icons="[]"
    >
        <p>
            A library for efficitly calculating probabilities of arbitrary dice
            pools and dice rolling mechanics. Enumerates all possible outcomes
            and provides an exact result.
        </p>
    </ProjectsPageProject>

    <ProjectsPageProject
        :title="'Material clustering benchmark'"
        :icons="[]"
    >
        <p>...</p>
    </ProjectsPageProject>
</template>
