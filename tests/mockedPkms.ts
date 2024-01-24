import { IPokemon } from "../src/types/pokemon.types";

type TMockPkms = {
    structured: IPokemon[];
    unstructured: object;
}

const mockedPkms: TMockPkms = {
    "structured": [
        {
            "abilities": [
                {
                    "name": "technician",
                    "url": "https://pokeapi.co/api/v2/ability/101/",
                    "isHidden": false
                }
            ],
            "moves": [
                {
                    "name": "mega-punch",
                    "url": "https://pokeapi.co/api/v2/move/5/"
                },
                {
                    "name": "fire-punch",
                    "url": "https://pokeapi.co/api/v2/move/7/"
                },
                {
                    "name": "ice-punch",
                    "url": "https://pokeapi.co/api/v2/move/8/"
                },
                {
                    "name": "thunder-punch",
                    "url": "https://pokeapi.co/api/v2/move/9/"
                },
                {
                    "name": "mega-kick",
                    "url": "https://pokeapi.co/api/v2/move/25/"
                }
            ],
            "stats": {
                "hp": 90,
                "attack": 125,
                "defense": 80,
                "spAttack": 90,
                "spDefense": 90,
                "speed": 125
            },
            "sprites": {
                "static": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png",
                "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/802.png",
                "animated": null
            },
            "types": {
                "primary": "fighting",
                "secondary": "ghost"
            },
            "name": "marshadow",
            "height": 7,
            "weight": 222,
            "id": 802
        },
        
        {
            "abilities": [
                {
                    "name": "technician",
                    "url": "https://pokeapi.co/api/v2/ability/101/",
                    "isHidden": false
                }
            ],
            "moves": [
                {
                    "name": "mega-punch",
                    "url": "https://pokeapi.co/api/v2/move/5/"
                },
                {
                    "name": "fire-punch",
                    "url": "https://pokeapi.co/api/v2/move/7/"
                },
                {
                    "name": "ice-punch",
                    "url": "https://pokeapi.co/api/v2/move/8/"
                },
                {
                    "name": "thunder-punch",
                    "url": "https://pokeapi.co/api/v2/move/9/"
                },
                {
                    "name": "mega-kick",
                    "url": "https://pokeapi.co/api/v2/move/25/"
                }
            ],
            "stats": {
                "hp": 90,
                "attack": 125,
                "defense": 80,
                "spAttack": 90,
                "spDefense": 90,
                "speed": 125
            },
            "sprites": {
                "static": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png",
                "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/802.png",
                "animated": null
            },
            "types": {
                "primary": "fighting",
                "secondary": "ghost"
            },
            "name": "charmander",
            "height": 7,
            "weight": 222,
            "id": 802
        }
    ],
    "unstructured": [
        {
            "abilities": [
                {
                    "ability": {
                        "name": "technician",
                        "url": "https://pokeapi.co/api/v2/ability/101/"
                    },
                    "is_hidden": false,
                    "slot": 1
                }
            ],
            "base_experience": 300,
            "forms": [
                {
                    "name": "marshadow",
                    "url": "https://pokeapi.co/api/v2/pokemon-form/802/"
                }
            ],
            "game_indices": [],
            "height": 7,
            "held_items": [],
            "id": 802,
            "is_default": true,
            "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/802/encounters",
            "moves": [
                {
                    "move": {
                        "name": "mega-punch",
                        "url": "https://pokeapi.co/api/v2/move/5/"
                    },
                    "version_group_details": [
                        {
                            "level_learned_at": 0,
                            "move_learn_method": {
                                "name": "machine",
                                "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                            },
                            "version_group": {
                                "name": "sword-shield",
                                "url": "https://pokeapi.co/api/v2/version-group/20/"
                            }
                        }
                    ]
                },
                {
                    "move": {
                        "name": "fire-punch",
                        "url": "https://pokeapi.co/api/v2/move/7/"
                    },
                    "version_group_details": [
                        {
                            "level_learned_at": 1,
                            "move_learn_method": {
                                "name": "level-up",
                                "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                            },
                            "version_group": {
                                "name": "sun-moon",
                                "url": "https://pokeapi.co/api/v2/version-group/17/"
                            }
                        },
                        {
                            "level_learned_at": 1,
                            "move_learn_method": {
                                "name": "level-up",
                                "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                            },
                            "version_group": {
                                "name": "ultra-sun-ultra-moon",
                                "url": "https://pokeapi.co/api/v2/version-group/18/"
                            }
                        },
                        {
                            "level_learned_at": 0,
                            "move_learn_method": {
                                "name": "tutor",
                                "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                            },
                            "version_group": {
                                "name": "ultra-sun-ultra-moon",
                                "url": "https://pokeapi.co/api/v2/version-group/18/"
                            }
                        },
                        {
                            "level_learned_at": 1,
                            "move_learn_method": {
                                "name": "level-up",
                                "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                            },
                            "version_group": {
                                "name": "sword-shield",
                                "url": "https://pokeapi.co/api/v2/version-group/20/"
                            }
                        },
                        {
                            "level_learned_at": 0,
                            "move_learn_method": {
                                "name": "machine",
                                "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                            },
                            "version_group": {
                                "name": "sword-shield",
                                "url": "https://pokeapi.co/api/v2/version-group/20/"
                            }
                        }
                    ]
                },
                {
                    "move": {
                        "name": "ice-punch",
                        "url": "https://pokeapi.co/api/v2/move/8/"
                    },
                    "version_group_details": [
                        {
                            "level_learned_at": 1,
                            "move_learn_method": {
                                "name": "level-up",
                                "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                            },
                            "version_group": {
                                "name": "sun-moon",
                                "url": "https://pokeapi.co/api/v2/version-group/17/"
                            }
                        },
                        {
                            "level_learned_at": 1,
                            "move_learn_method": {
                                "name": "level-up",
                                "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                            },
                            "version_group": {
                                "name": "ultra-sun-ultra-moon",
                                "url": "https://pokeapi.co/api/v2/version-group/18/"
                            }
                        },
                        {
                            "level_learned_at": 0,
                            "move_learn_method": {
                                "name": "tutor",
                                "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                            },
                            "version_group": {
                                "name": "ultra-sun-ultra-moon",
                                "url": "https://pokeapi.co/api/v2/version-group/18/"
                            }
                        },
                        {
                            "level_learned_at": 1,
                            "move_learn_method": {
                                "name": "level-up",
                                "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                            },
                            "version_group": {
                                "name": "sword-shield",
                                "url": "https://pokeapi.co/api/v2/version-group/20/"
                            }
                        },
                        {
                            "level_learned_at": 0,
                            "move_learn_method": {
                                "name": "machine",
                                "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                            },
                            "version_group": {
                                "name": "sword-shield",
                                "url": "https://pokeapi.co/api/v2/version-group/20/"
                            }
                        }
                    ]
                },
                {
                    "move": {
                        "name": "thunder-punch",
                        "url": "https://pokeapi.co/api/v2/move/9/"
                    },
                    "version_group_details": [
                        {
                            "level_learned_at": 1,
                            "move_learn_method": {
                                "name": "level-up",
                                "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                            },
                            "version_group": {
                                "name": "sun-moon",
                                "url": "https://pokeapi.co/api/v2/version-group/17/"
                            }
                        },
                        {
                            "level_learned_at": 1,
                            "move_learn_method": {
                                "name": "level-up",
                                "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                            },
                            "version_group": {
                                "name": "ultra-sun-ultra-moon",
                                "url": "https://pokeapi.co/api/v2/version-group/18/"
                            }
                        },
                        {
                            "level_learned_at": 0,
                            "move_learn_method": {
                                "name": "tutor",
                                "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                            },
                            "version_group": {
                                "name": "ultra-sun-ultra-moon",
                                "url": "https://pokeapi.co/api/v2/version-group/18/"
                            }
                        },
                        {
                            "level_learned_at": 1,
                            "move_learn_method": {
                                "name": "level-up",
                                "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                            },
                            "version_group": {
                                "name": "sword-shield",
                                "url": "https://pokeapi.co/api/v2/version-group/20/"
                            }
                        },
                        {
                            "level_learned_at": 0,
                            "move_learn_method": {
                                "name": "machine",
                                "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                            },
                            "version_group": {
                                "name": "sword-shield",
                                "url": "https://pokeapi.co/api/v2/version-group/20/"
                            }
                        }
                    ]
                },
                {
                    "move": {
                        "name": "mega-kick",
                        "url": "https://pokeapi.co/api/v2/move/25/"
                    },
                    "version_group_details": [
                        {
                            "level_learned_at": 0,
                            "move_learn_method": {
                                "name": "machine",
                                "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                            },
                            "version_group": {
                                "name": "sword-shield",
                                "url": "https://pokeapi.co/api/v2/version-group/20/"
                            }
                        }
                    ]
                }
            ],
            "name": "marshadow",
            "order": 983,
            "past_abilities": [],
            "past_types": [],
            "species": {
                "name": "marshadow",
                "url": "https://pokeapi.co/api/v2/pokemon-species/802/"
            },
            "sprites": {
                "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/802.png",
                "back_female": null,
                "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/802.png",
                "back_shiny_female": null,
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png",
                "front_female": null,
                "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/802.png",
                "front_shiny_female": null,
                "other": {
                    "dream_world": {
                        "front_default": null,
                        "front_female": null
                    },
                    "home": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/802.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/802.png",
                        "front_shiny_female": null
                    },
                    "official-artwork": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/802.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/802.png"
                    },
                    "showdown": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/802.gif",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/802.gif",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/802.gif",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/802.gif",
                        "front_shiny_female": null
                    }
                },
                "versions": {
                    "generation-i": {
                        "red-blue": {
                            "back_default": null,
                            "back_gray": null,
                            "back_transparent": null,
                            "front_default": null,
                            "front_gray": null,
                            "front_transparent": null
                        },
                        "yellow": {
                            "back_default": null,
                            "back_gray": null,
                            "back_transparent": null,
                            "front_default": null,
                            "front_gray": null,
                            "front_transparent": null
                        }
                    },
                    "generation-ii": {
                        "crystal": {
                            "back_default": null,
                            "back_shiny": null,
                            "back_shiny_transparent": null,
                            "back_transparent": null,
                            "front_default": null,
                            "front_shiny": null,
                            "front_shiny_transparent": null,
                            "front_transparent": null
                        },
                        "gold": {
                            "back_default": null,
                            "back_shiny": null,
                            "front_default": null,
                            "front_shiny": null,
                            "front_transparent": null
                        },
                        "silver": {
                            "back_default": null,
                            "back_shiny": null,
                            "front_default": null,
                            "front_shiny": null,
                            "front_transparent": null
                        }
                    },
                    "generation-iii": {
                        "emerald": {
                            "front_default": null,
                            "front_shiny": null
                        },
                        "firered-leafgreen": {
                            "back_default": null,
                            "back_shiny": null,
                            "front_default": null,
                            "front_shiny": null
                        },
                        "ruby-sapphire": {
                            "back_default": null,
                            "back_shiny": null,
                            "front_default": null,
                            "front_shiny": null
                        }
                    },
                    "generation-iv": {
                        "diamond-pearl": {
                            "back_default": null,
                            "back_female": null,
                            "back_shiny": null,
                            "back_shiny_female": null,
                            "front_default": null,
                            "front_female": null,
                            "front_shiny": null,
                            "front_shiny_female": null
                        },
                        "heartgold-soulsilver": {
                            "back_default": null,
                            "back_female": null,
                            "back_shiny": null,
                            "back_shiny_female": null,
                            "front_default": null,
                            "front_female": null,
                            "front_shiny": null,
                            "front_shiny_female": null
                        },
                        "platinum": {
                            "back_default": null,
                            "back_female": null,
                            "back_shiny": null,
                            "back_shiny_female": null,
                            "front_default": null,
                            "front_female": null,
                            "front_shiny": null,
                            "front_shiny_female": null
                        }
                    },
                    "generation-v": {
                        "black-white": {
                            "animated": {
                                "back_default": null,
                                "back_female": null,
                                "back_shiny": null,
                                "back_shiny_female": null,
                                "front_default": null,
                                "front_female": null,
                                "front_shiny": null,
                                "front_shiny_female": null
                            },
                            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/802.png",
                            "back_female": null,
                            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/802.png",
                            "back_shiny_female": null,
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/802.png",
                            "front_female": null,
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/802.png",
                            "front_shiny_female": null
                        }
                    },
                    "generation-vi": {
                        "omegaruby-alphasapphire": {
                            "front_default": null,
                            "front_female": null,
                            "front_shiny": null,
                            "front_shiny_female": null
                        },
                        "x-y": {
                            "front_default": null,
                            "front_female": null,
                            "front_shiny": null,
                            "front_shiny_female": null
                        }
                    },
                    "generation-vii": {
                        "icons": {
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/802.png",
                            "front_female": null
                        },
                        "ultra-sun-ultra-moon": {
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/802.png",
                            "front_female": null,
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/802.png",
                            "front_shiny_female": null
                        }
                    },
                    "generation-viii": {
                        "icons": {
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/802.png",
                            "front_female": null
                        }
                    }
                }
            },
            "stats": [
                {
                    "base_stat": 90,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 125,
                    "effort": 2,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 80,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 90,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 90,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 125,
                    "effort": 1,
                    "stat": {
                        "name": "speed",
                        "url": "https://pokeapi.co/api/v2/stat/6/"
                    }
                }
            ],
            "types": [
                {
                    "slot": 1,
                    "type": {
                        "name": "fighting",
                        "url": "https://pokeapi.co/api/v2/type/2/"
                    }
                },
                {
                    "slot": 2,
                    "type": {
                        "name": "ghost",
                        "url": "https://pokeapi.co/api/v2/type/8/"
                    }
                }
            ],
            "weight": 222
        }
    ]
}

export { mockedPkms };
