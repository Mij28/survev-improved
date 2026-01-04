import { util } from "../../utils/util";
import { v2 } from "../../utils/v2";
import { Main, type PartialMapDef } from "./baseDefs";

const mapDef: PartialMapDef = {
    mapId: 7,
    desc: {
        name: "Cobalt",
        icon: "img/gui/cobalt.svg",
        buttonCss: "btn-mode-cobalt",
    },
    assets: {
        audio: [
            { name: "spawn_01", channel: "ui" },
            { name: "ping_unlock_01", channel: "ui" },
            { name: "ambient_lab_01", channel: "ambient" },
            { name: "log_13", channel: "sfx" },
            { name: "log_14", channel: "sfx" },
        ],
        atlases: ["gradient", "loadout", "shared", "cobalt"],
    },
    biome: {
        colors: {
            background: 0x20e18,
            water: 0x3571,
            beach: 0x684836,
            riverbank: 0x443d3a,
            grass: 0x4d5a68,
            underground: 0x1b0d03,
            playerSubmerge: 0x123049,
            playerGhillie: 0x4d5a68,
        },
        particles: {},
    },
    gameConfig: {
        planes: {
            crates: [
                { name: "class_shell_02", weight: 10 },
                { name: "class_shell_03", weight: 1 },
            ],
        },
        unlocks: {
            timings: [
                {
                    type: "bunker_twins_sublevel_01",
                    stagger: 0.2,
                    circleIdx: 2,
                    wait: 5,
                },
            ],
        },
    },
    lootTable: {
        tier_guns: [
            { name: "famas", count: 1, weight: 0.9 },
            { name: "m16", count: 1, weight: 0.8 },
            { name: "hk416", count: 1, weight: 4 },
            { name: "mk12", count: 1, weight: 0.1 },
            { name: "pkp", count: 1, weight: 0.005 },
            { name: "m134", count: 1, weight: 0.005 },
            { name: "m249", count: 1, weight: 0.006 },
            { name: "m79", count: 1, weight: 0.01 },
            { name: "pkm", count: 1, weight: 0.1 },
            { name: "ak47", count: 1, weight: 2.7 },
            { name: "scar", count: 1, weight: 0.01 },
            { name: "dp28", count: 1, weight: 0.5 },
            { name: "mosin", count: 1, weight: 0.1 },
            { name: "m39", count: 1, weight: 0.1 },
            { name: "mp5", count: 1, weight: 10 },
            { name: "mac10", count: 1, weight: 6 },
            { name: "ump9", count: 1, weight: 4 },
            { name: "m870", count: 1, weight: 9 },
            { name: "m1100", count: 1, weight: 6 },
            { name: "hawk", count: 1, weight: 2 },
            { name: "mp220", count: 1, weight: 2.5 },
            { name: "saiga", count: 1, weight: 0.1 },
            { name: "ot38", count: 1, weight: 8 },
            { name: "m9", count: 1, weight: 19 },
            { name: "m93r", count: 1, weight: 5 },
            { name: "glock", count: 1, weight: 7 },
            { name: "deagle", count: 1, weight: 0.05 },
            { name: "vector", count: 1, weight: 0.01 },
            {
                name: "vector_sup",
                count: 1,
                weight: 0.001,
            },
            { name: "bizon", count: 1, weight: 0.01 },
            { name: "sv98", count: 1, weight: 0.01 },
            { name: "spas12", count: 1, weight: 1 },
            { name: "qbb97", count: 1, weight: 0.01 },
            { name: "flare_gun", count: 1, weight: 0.145 }, // !
            { name: "flare_gun_dual", count: 1, weight: 0.0025 }, // !
            { name: "groza", count: 1, weight: 0.8 },
            { name: "m4", count: 1, weight: 0.8},
            { name: "scout_elite", count: 1, weight: 0.05 },
            { name: "vss", count: 1, weight: 0.05 }, // !
            { name: "awc", count: 1, weight: 0.00000136 },
        ],
        tier_ammo: [
            { name: "9mm", count: 60, weight: 3 },
            { name: "762mm", count: 60, weight: 3 },
            { name: "556mm", count: 60, weight: 3 },
            { name: "12gauge", count: 10, weight: 3 },
        ],
        tier_ammo_crate: [
            { name: "9mm", count: 60, weight: 3 },
            { name: "762mm", count: 60, weight: 3 },
            { name: "556mm", count: 60, weight: 3 },
            { name: "12gauge", count: 10, weight: 3 },
            { name: "50AE", count: 35, weight: 1 },
            { name: "308sub", count: 10, weight: 1 },
            { name: "40mm", count: 10, weight: 1 },
            { name: "flare", count: 1, weight: 1 },
        ],
        // disable outfits from spawning
        tier_outfits: [
            { name: "chest02", count: 1, weight: 1 },
            { name: "helmet02", count: 1, weight: 1 },
        ],
        tier_mansion_floor: [{ name: "tier_outfits", count: 1, weight: 1 }],
        tier_vault_floor: [{ name: "tier_outfits", count: 1, weight: 1 }],
        tier_police_floor: [{ name: "tier_outfits", count: 1, weight: 1 }],
        tier_conch: [{ name: "tier_outfits", count: 1, weight: 1 }],
        tier_noir_outfit: [{ name: "tier_outfits", count: 1, weight: 1 }],
        tier_khaki_outfit: [{ name: "tier_outfits", count: 1, weight: 1 }],
        tier_islander_outfit: [{ name: "tier_outfits", count: 1, weight: 1 }],
        tier_imperial_outfit: [{ name: "tier_outfits", count: 1, weight: 1 }],

        tier_club_melee: [{ name: "tier_outfits", count: 1, weight: 1 }],

        tier_airdrop_outfits: [{ name: "outfitGhillie", count: 1, weight: 1 }],
    },
    /* STRIP_FROM_PROD_CLIENT:START */
    mapGen: {
        map: {
            rivers: {
                weights: [
                    // apparently cobalt only had this fixed amount of widths?
                    // I deserialized a bunch of map msgs and couldn't find a different one
                    { weight: 1, widths: [16, 14, 12, 10, 8, 6, 4] },
                ],
                spawnCabins: false,
                masks: [
                    {
                        pos: v2.create(0.5, 0.5),
                        rad: 100,
                    },
                    {
                        rad: 100,
                        genOnShore: true,
                    },
                    {
                        rad: 100,
                        genOnShore: true,
                    },
                ],
            },
        },
        customSpawnRules: {
            locationSpawns: [
                {
                    type: "bunker_structure_09",
                    pos: v2.create(0.5, 0.5),
                    rad: 50,
                    retryOnFailure: true,
                },
            ],
        },
        densitySpawns: [
            {
                stone_01cb: 350,
                barrel_01: 76,
                silo_01: 8,
                crate_01: 50,
                crate_02: 4,
                crate_03: 8,
                bush_01cb: 78,
                cache_06: 12,
                tree_01cb: 320,
                hedgehog_01: 24,
                container_01: 5,
                container_02: 5,
                container_03: 5,
                container_04: 5,
                shack_01: 7,
                outhouse_01: 5,
                loot_tier_1: 24,
                loot_tier_beach: 4,
            },
        ],
        fixedSpawns: [
            {
                bunker_structure_09: 1,
                warehouse_01: 2,
                house_red_01: { small: 3, large: 4 },
                house_red_02: { small: 3, large: 4 },
                barn_01: { small: 1, large: 3 },
                barn_02: 1,
                hut_01: 3,
                hut_02: 1, // spas hut
                hut_03: 1, // scout hut
                shack_03a: 2,
                shack_03b: { small: 2, large: 3 },
                cache_01cb: 1,
                cache_02cb: 1, // mosin tree
                cache_07: 1,
                bunker_structure_01: { odds: 0.05 },
                bunker_structure_02: 1,
                bunker_structure_03: 1,
                bunker_structure_04: 1,
                bunker_structure_05: 1,
                warehouse_complex_01: 1,
                chest_01cb: 1,
                chest_03cb: { odds: 0.2 },
                mil_crate_02: { odds: 0.25 },
                teahouse_complex_01su: {
                    small: 1,
                    large: 2,
                },
                stone_04: 1,
                club_complex_01: 1,
                class_shell_01: 40,
                cache_log_13: 1, // recorder crate
            },
        ],
        spawnReplacements: [
            {
                tree_01: "tree_01cb",
                stone_01: "stone_01cb",
                bush_01: "bush_01cb",
                bush_04: "bush_04cb",
                stone_03: "stone_03cb",
            },
        ],
        importantSpawns: [
            "club_complex_01",
            "warehouse_complex_01",
            "bunker_structure_09",
        ],
    },
    /* STRIP_FROM_PROD_CLIENT:END */
    gameMode: {
        maxPlayers: 80,
        perkMode: true,
        perkModeRoles: ["last_survivr", "sniper", "healer", "demo", "assault", "tank"],
    },
};

export const Cobalt = util.mergeDeep({}, Main, mapDef);
