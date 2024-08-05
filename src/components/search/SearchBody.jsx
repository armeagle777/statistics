import Divider from '@mui/material/Divider';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { perPageCount } from '../../utils/constants';
import SearchAside from './SearchAside';
import SearchRow from './SearchRow';
import { countForFilter } from '../../utils/configs';

const SearchBody = ({ persons, currentPage, changePage, totalCount }) => {
    const showExtended = !!totalCount >= countForFilter;
    return (
        <Stack
            direction='row'
            spacing={1}
            sx={{ justifyContent: 'center', pt: 2 }}
        >
            <SearchAside showExtended={showExtended} persons={persons} />
            <Divider orientation='vertical' variant='middle' flexItem />
            <Stack
                spacing={1}
                sx={{ width: '80%', px: 2, pb: 4, alignItems: 'center' }}
            >
                {persons.map((person, index) => (
                    <Stack
                        width='100%'
                        key={person.PNum}
                        spacing={1}
                        direction='column'
                    >
                        <SearchRow personInfo={person} />
                        {index < persons?.length - 1 && <Divider />}
                    </Stack>
                ))}

                {showExtended && (
                    <Pagination
                        count={Math.ceil(totalCount / perPageCount)}
                        shape='rounded'
                        color='primary'
                        onChange={(_, newPage) => {
                            changePage(newPage);
                        }}
                        page={currentPage}
                    />
                )}
            </Stack>
        </Stack>
    );
};

export default SearchBody;
