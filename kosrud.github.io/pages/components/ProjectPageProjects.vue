<script setup lang="ts">
import ProjectsPage_ProjectsProject from "./ProjectsPageProjectsProject.vue";
</script>

<template>
    <ProjectsPage_ProjectsProject
        :title="'ProTeGe v1'"
        :icons="[
            { title: 'C++', url: '/assets/icons/dev/cpp/icon.svg' },
            { title: 'wxWidgets', url: '/assets/icons/dev/wxWidgets/icon.svg' },
        ]"
        :links="{ github: '#', docs: '#' }"
    >
        <p>Procedural texture generator (CPU, multi-threaded).</p>
    </ProjectsPage_ProjectsProject>

    <ProjectsPage_ProjectsProject
        :title="'ProTeGe v2'"
        :icons="[
            { title: 'Unity', url: '/assets/icons/dev/unity/icon.svg' },
            { title: 'C#', url: '/assets/icons/dev/csharp/icon.svg' },
            { title: 'HLSL', url: '/assets/icons/dev/hlsl/icon.svg' },
        ]"
    >
        <p>
            Procedural texture generator with graph-based UI and real-time
            preview (GPU).
        </p>
    </ProjectsPage_ProjectsProject>

    <ProjectsPage_ProjectsProject
        :title="'DQ skinning for Unity'"
        :icons="[
            { title: 'Unity', url: '/assets/icons/dev/unity/icon.svg' },
            { title: 'C#', url: '/assets/icons/dev/csharp/icon.svg' },
            { title: 'HLSL', url: '/assets/icons/dev/hlsl/icon.svg' },
        ]"
    >
        <p>
            Implementation of GPU dual quaternion skinning for Unity with a
            novel bulging compensation algorithm and blend shape support.
        </p>
    </ProjectsPage_ProjectsProject>

    <ProjectsPage_ProjectsProject
        :title="'dice-pool-calc'"
        :icons="[]"
    >
        <p>
            A library for efficitly calculating probabilities of arbitrary dice
            pools and dice rolling mechanics. Enumerates all possible outcomes
            and provides an exact result.
        </p>
    </ProjectsPage_ProjectsProject>

    <ProjectsPage_ProjectsProject
        :title="'Material clustering benchmark'"
        :icons="[]"
    >
        <p>...</p>
    </ProjectsPage_ProjectsProject>

    <ProjectsPage_ProjectsProject
        :title="'Joplin paginator'"
        :icons="[]"
    >
        <p>...</p>
    </ProjectsPage_ProjectsProject>

    <ProjectsPage_ProjectsProject
        :title="'This website'"
        :icons="[{ title: 'Pinia', url: '/assets/icons/dev/pinia/icon.svg' }]"
    >
        <p>...</p>
    </ProjectsPage_ProjectsProject>
</template>
