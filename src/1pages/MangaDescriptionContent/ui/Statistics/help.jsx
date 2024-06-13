// const handleCreateOrUpdate = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("type", selectedMessageType);
//     formData.append("message", messageText);
//
//     const existingMediaUrls = selectedFiles.filter(file => typeof file === 'string');
//     const newMediaFiles = selectedFiles.filter(file => file instanceof File);
//     formData.append('media_urls_to_keep', JSON.stringify(existingMediaUrls));
//     newMediaFiles.forEach(file => formData.append('media', file));
//
//     try {
//         if (isEditing) {
//             await updateMessage({ id: editMessageId, type: selectedMessageType, message: messageText, media: newMediaFiles.media });
//         } else {
//             await createMessage(formData);
//         }
//         // Очистка состояний после успешного создания/обновления сообщения
//         setSelectedFiles([]);
//         setSuccessMessage(isEditing ? "Сообщение успешно обновлено!" : "Сообщение успешно создано!");
//         setMessageText('');
//         setIsEditing(false);
//         setTimeout(() => {
//             setModalActive(false);
//             setSuccessMessage('');
//         }, 1000);
//     } catch (error) {
//         console.error("Ошибка при создании/обновлении сообщения:", error);
//         console.log("Дополнительная информация об ошибке:", error.response.data);
//     }
// };
//
// // Функция для открытия модального окна для редактирования сообщения
// const handleEdit = (message) => {
//     setEditMessageId(message.id);
//     setSelectedMessageType(message.type);
//     setMessageText(message.message);
//     setSelectedFiles([]);
//     // Добавляем новые файлы к уже существующим
//     const allFiles = message.media.map(mediaItem => mediaItem.media);
//     setSelectedFiles(prevFiles => [...allFiles, ...prevFiles]); // Объединяем массивы
//     setIsEditing(true);
//     setModalActive(true);
// };
//
//
// const handleRemove = (messageId) => {
//     const result = window.confirm('Вы точно хотите удалить сообщение?');
//     if (result) {
//         deleteMessage({ id: messageId });
//     }
// };
//
// const handleRemoveFile = (fileId) => {
//     setSelectedFiles(prevFiles => {
//         // Находим индекс файла по его ID
//         const index = prevFiles.findIndex(file => file.id === fileId);
//         if (index !== -1) {
//             // Создаем новый массив без удаленного файла
//             const newFiles = [...prevFiles.slice(0, index), ...prevFiles.slice(index + 1)];
//             return newFiles;
//         } else {
//             return prevFiles;
//         }
//     });
// };
//
//
//
//
// return (
//     <>
// <input
//     type='file'
//     multiple
//     className={styles.inputFiles}
//     accept='.jpg, .mp4, .MP4, .jpeg, .svg, .pdf, .eps, .ai, .cdr, .png, .gif, .raw, .tiff, .bmp, .psd, .avi, .mov, .wmv, .mkv'
//     onChange={(e) => {
//         const newFiles = Array.from(e.target.files);
//         setSelectedFiles(prevFiles => [...prevFiles, ...newFiles.filter(file => file instanceof File)]);
//     }}
// />
// <div className={styles.selected_files}>
//     <p>Выбранные файлы:</p>
//     <ul>
//         {selectedFiles.map((file, index) => (
//             <li key={index}>
//                 {file.name}
//                 <button onClick={() => handleRemoveFile(index)}>Удалить</button>
//             </li>
//         ))}
//     </ul>
// </div>
//     </>
//
// )
//
// export default handleCreateOrUpdate