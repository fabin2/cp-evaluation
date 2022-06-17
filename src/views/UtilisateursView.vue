<template>
    {{myName}}
    <div class="tab">
        <table>
            <thead>
                <tr>
                    <th v-for="(objectTitle) in Object.keys(this.$store.state.datas[0])">
                        {{objectTitle.toUpperCase()}}
                    </th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(utilisateur, indexPos) in this.$store.state.datas"
                    :key="indexPos+utilisateur.id+'mySpecialKey'">
                    <!-- {{utilisateur}} -->
                    <!-- {{indexPos}} -->
                    <td v-for=" (propertyValue,propertyName,indexPos) in utilisateur">
                        {{myCellValue(propertyName,propertyValue)}}
                    </td>
                    <!-- <td>
                        {{utilisateur}}
                    </td> -->
                    <td>
                        <input type="button" value="supprimer" @click="myDelete(indexPos,this.$store.state.datas)">
                        <router-link :to="{name: 'modifier', params: {user: utilisateur.id, someData: utilisateur.username}}">
                        <span>Modifier</span>
                        <Teleport to="body">
                            <modal :show="showModal" :userId="activeUserId" :userName="activeUserName" @cancel="showModal = false" @confirm="supprimerLigne">
                            </modal>
                        </Teleport>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'UtilisateursView',
        // variables container
        data(){
             return {myName : "Fabin"}   
        },
        // Functions container
        methods: {
            modify(){
                return null;
            },
            myDelete(indexPos,allUsersFromStore){
                console.log(allUsersFromStore.length);
                allUsersFromStore.splice(indexPos,1)
                console.log(allUsersFromStore.length);
                // alert (idToBeDeleted)
                // console.log("checking");
                // const userTOBeDeleted = usersData.find((singleUser) => singleUser.id === idToBeDeleted)
            },
            // function to add values in cell
            myCellValue(propertyName, propertyValue) {
                if (propertyName === "address") {
                    return propertyValue.city;
                }
                if (propertyName === "company") {
                    return propertyValue.name;
                }
                else {
                    return propertyValue;
                }
            },
            
        }
    }
</script>

<style>
    .tab {
        display: flex;
        justify-content: center;
    }
    table {
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid black;
        padding: 2px;
    
    
}</style>