<Modal
            animationType="slide"
            transparent
            visible={editBoard}
            onRequestClose={() => {
                setEditBoard(!editBoard);
            }}
        >

            <View style={styles.modalView}>
                <Text style={styles.modalText}>Edit board</Text>
                <TextInput
                    style={styles.input}
                    value={inputs.name}
                    placeholder="name: "
                    onChangeText={(text) => onInputHandler('name', text)}
                />
                <TextInput
                    style={styles.input}
                    value={inputs.description}
                    placeholder="description: "
                    onChangeText={(text) => onInputHandler('description', text)}
                />
                <TextInput
                    style={styles.input}
                    value={inputs.imageUrl}
                    placeholder="image url"
                    onChangeText={(text) => onInputHandler('imageUrl', text)}
                />

                <View style={styles.containerRow}>
                    <Pressable
                        style={[styles.button, styles.edit]}
                        onPress={() => {
                            setEditBoard(!editBoard);
                            onEditHandler();
                        }}
                    >
                        <Text style={styles.textStyle}>edit</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.cancell]}
                        onPress={() => setEditBoard(!editBoard)}
                    >
                        <Text style={styles.textStyle}>cancell</Text>
                    </Pressable>
                </View>
                <Pressable
                    style={[styles.button, styles.exit]}
                    onPress={() => {
                        setEditBoard(!editBoard);
                        onDeleteHandler();
                    }}
                >
                    <View><Feather name="trash-2" size={24} /></View>
                </Pressable>
            </View>
        </Modal>